import { Link } from "react-router-dom";

type NavbarProps = {
  cartCount: number;
};

const Navbar = ({ cartCount }: NavbarProps) => {
  return (
    <nav className="flex justify-between px-6 py-4 bg-white shadow-md items-center">
      {/* BRAND */}
      <div className="text-2xl font-extrabold text-orange-600">
        🍗 Don C. Lechon Manokan
      </div>

      {/* LINKS */}
      <div className="flex gap-6 items-center">
        <Link to="/" className="text-gray-700 hover:text-orange-600 transition">
          Home
        </Link>

        <Link
          to="/shop"
          className="text-gray-700 hover:text-orange-600 transition"
        >
          Menu
        </Link>

        <Link
          to="/cart"
          className="relative text-gray-700 hover:text-orange-600 transition"
        >
          🛒 Cart
          {/* BADGE */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
