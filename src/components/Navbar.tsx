import { Link } from "react-router-dom";

type NavbarProps = {
  cartCount: number;
};

const Navbar = ({ cartCount }: NavbarProps) => {
  return (
    <nav className="flex justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-xl font-bold text-blue-600">MyShop</div>

      <div className="flex gap-6 items-center">
        <Link to="/" className="text-gray-700">
          Home
        </Link>

        <Link to="/shop" className="text-gray-700">
          Shop
        </Link>

        <Link to="/cart" className="relative text-gray-700">
          🛒 Cart
          {/* 🔴 LIVE NOTIFICATION BADGE */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
