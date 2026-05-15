import { Link } from "react-router-dom";

type CartItem = {
  id?: string | number;
  name: string;
  price: number;
  image?: string;
};

type CartProps = {
  cart: CartItem[];
  removeFromCart: (id: string | number) => void;
};

const Cart = ({ cart, removeFromCart }: CartProps) => {
  const total = cart.reduce((a, b) => a + b.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-6 text-gray-800">🛒 Your Cart</h1>

        {/* Empty state */}
        {cart.length === 0 ? (
          <p className="text-gray-500">Walang laman ang cart mo.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">
                  {/* 🖼️ Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  {/* Product Info */}
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>

                    <p className="text-green-600 font-bold">
                      ₱{item.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <button
                  onClick={() => removeFromCart(item.id!)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Total */}
        <div className="mt-6 flex justify-between items-center border-t pt-4">
          <span className="text-lg font-semibold text-gray-800">Total</span>
          <span className="text-xl font-bold text-green-600">
            ₱{total.toLocaleString()}
          </span>
        </div>

        {/* Checkout */}
        <Link to="/checkout">
          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
