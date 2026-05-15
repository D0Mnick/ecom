import toast from "react-hot-toast";

type CartItem = {
  id?: string | number;
  name: string;
  price: number;
};

type CheckoutProps = {
  cart: CartItem[];
};

const Checkout = ({ cart }: CheckoutProps) => {
  const total = cart.reduce((a, b) => a + b.price, 0);

  const handlePay = () => {
    toast.success("Redirecting to PayMongo... 💳");

    // TODO: integrate PayMongo API here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">💳 Checkout</h1>

        {/* Summary box */}
        <div className="bg-gray-50 p-4 rounded-lg border mb-6">
          <p className="text-gray-600 mb-2">Items: {cart.length}</p>

          <p className="text-lg font-semibold text-gray-800 flex justify-between">
            <span>Total:</span>
            <span className="text-green-600">₱{total.toLocaleString()}</span>
          </p>
        </div>

        {/* Payment info */}
        <p className="text-sm text-gray-500 mb-6">
          You will be redirected to a secure payment gateway.
        </p>

        {/* Pay button */}
        <button
          onClick={handlePay}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Pay with PayMongo
        </button>

        {/* Toast helper text */}
        <p className="text-xs text-gray-400 mt-4 text-center">
          Secure payment powered by PayMongo
        </p>
      </div>
    </div>
  );
};

export default Checkout;
