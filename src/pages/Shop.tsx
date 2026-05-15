import products from "../data/products";
import ProductCard from "../components/ProductCard";

type Product = {
  id: string | number;
  name: string;
  price: number;
  image: string;
};

type HomeProps = {
  addToCart: (product: Product) => void;
};

const Shop = ({ addToCart }: HomeProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8">🛍️ Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
