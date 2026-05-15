import toast from "react-hot-toast";

type Product = {
  id: string | number;
  name: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: Product;
  addToCart: (product: Product) => void;
};

const ProductCard = ({ product, addToCart }: ProductCardProps) => {
  const handleAdd = () => {
    addToCart(product);
    toast.success("Added to cart 🛒");
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

        <p className="text-green-600 font-bold mt-1">
          ₱{product.price.toLocaleString()}
        </p>

        <button
          onClick={handleAdd}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
