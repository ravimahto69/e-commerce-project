import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    customerName: "",
    address: "",
    phone: "",
    totalAmount: 1000
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    await API.post("/orders", form);

    navigate("/success");
  };

  return (
    <div>

      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setForm({...form, customerName: e.target.value})
          }
        />

        <input
          type="text"
          placeholder="Address"
          onChange={(e) =>
            setForm({...form, address: e.target.value})
          }
        />

        <input
          type="text"
          placeholder="Phone"
          onChange={(e) =>
            setForm({...form, phone: e.target.value})
          }
        />

        <button type="submit">
          Place Order
        </button>

      </form>

    </div>
  );
}

export default Checkout;