import products from "../data/products";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types";

type ShopProps = {
  addToCart: (product: Product) => void;
};

const Shop = ({ addToCart }: ShopProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">🛍️ Products</h1>

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
