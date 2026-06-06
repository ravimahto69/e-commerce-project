import { useEffect, useState } from "react";
import API from "../api/axios";

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = Number(localStorage.getItem("userId"));

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await API.get(`/orders/user/${userId}`);
      const ordersData = response.data || [];

      const enrichedOrders = await Promise.all(
        ordersData.map(async (order) => {
          if (!order.items) return order;

          const itemsWithProducts = await Promise.all(
            order.items.map(async (item) => {
              try {
                const productRes = await API.get(
                  `/products/${item.productId}`
                );
                return {
                  ...item,
                  product: productRes.data,
                };
              } catch (error) {
                console.error(error);
                return {
                  ...item,
                  product: null,
                };
              }
            })
          );

          return {
            ...order,
            items: itemsWithProducts,
          };
        })
      );

      setOrders(enrichedOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'delivered': return 'bg-green-100 text-green-700';
      case 'shipped': return 'bg-blue-100 text-blue-700';
      case 'processing': return 'bg-yellow-100 text-yellow-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-purple-100 text-purple-700';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#f6f8fb]">
        <div className="text-center">
          <div className="w-10 h-10 border-3 border-[#08122f] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-3 text-sm text-slate-500">Loading Orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f8fb]">
      {/* Compact Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-5 py-6">
          <h1 className="text-2xl font-bold text-[#08122f]">
            My Orders
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            {orders.length} order{orders.length !== 1 ? 's' : ''} found
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-6">
        {orders.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
            <div className="text-5xl mb-4">📦</div>
            <h2 className="text-2xl font-bold text-[#08122f]">
              No Orders Yet
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Start shopping to see your order history
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Compact Order Header */}
                <div className="bg-gray-50 px-5 py-3 flex flex-wrap justify-between items-center gap-3">
                  <div className="flex items-center gap-4">
                    <div>
                      <h2 className="font-semibold text-[#08122f] text-sm">
                        Order #{order.id}
                      </h2>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {order.orderDate
                          ? new Date(order.orderDate).toLocaleDateString()
                          : "N/A"}
                      </p>
                    </div>
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status || "Placed"}
                    </span>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-xl text-[#08122f]">
                      ₹{order.totalAmount?.toLocaleString()}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {order.items?.length || 0} item{order.items?.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                {/* Compact Products List */}
                <div className="divide-y divide-gray-100">
                  {order.items?.map((item, idx) => (
                    <div
                      key={item.id || idx}
                      className="px-5 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors"
                    >
                      <img
                        src={
                          item.product?.imageUrl ||
                          "https://via.placeholder.com/60"
                        }
                        alt={item.product?.name || "Product"}
                        className="w-12 h-12 object-cover rounded-lg bg-gray-100"
                      />

                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-[#08122f] text-sm truncate">
                          {item.product?.name || "Product"}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                          <p className="text-xs text-slate-500">
                            Qty: {item.quantity}
                          </p>
                          <p className="text-xs font-medium text-[#08122f]">
                            ₹{item.product?.price?.toLocaleString() || 0}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="font-semibold text-sm text-[#08122f]">
                          ₹{((item.product?.price || 0) * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Compact Footer with Action */}
                <div className="bg-gray-50 px-5 py-2 border-t border-gray-100 flex justify-end">
                  <button 
                    onClick={() => window.location.href = `/order/${order.id}`}
                    className="text-xs text-[#08122f] hover:text-blue-600 font-medium transition-colors"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderHistory;