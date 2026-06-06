import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductsDeatils";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import OrderHistory from "./pages/OrderHistory";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";

import UserProtectedRoute from "./components/UserProtectedRoute";
import AdminProtectedRoute from "./components/ProtectedRoute";

import { Routes, Route } from "react-router-dom";
import FeatureSection from "./components/FeatureSection";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetail />} />

        <Route
          path="/cart"
          element={
            <UserProtectedRoute>
              <Cart />
            </UserProtectedRoute>
          }
        />

        <Route
          path="/wishlist"
          element={
            <UserProtectedRoute>
              <Wishlist />
            </UserProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <UserProtectedRoute>
              <Checkout />
            </UserProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <UserProtectedRoute>
              <OrderHistory />
            </UserProtectedRoute>
          }
        />

        <Route path="/success" element={<OrderSuccess />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />
      </Routes>
      <FeatureSection></FeatureSection>
    </>
  );
};

export default App;