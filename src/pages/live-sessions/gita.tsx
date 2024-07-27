import { PublicLayout } from "@/layouts";
import React, { useState, useMemo, useCallback, memo } from "react";

// Memoized ProductList component
const ProductList = memo(({ products, addToCart }: any) => {
  console.log("Rendering ProductList");
  return (
    <ul className="border border-green-600 my-6 p-5">
      {products.map((product: any) => (
        <li className="py-2" key={product.id}>
          {product.name} - ${product.price}
          <button
            className="bg-gray-200 px-4 py-2 rounded-lg mx-3"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  );
});

const ShoppingCart = ({ cart }: any) => {
  console.log("Rendering ShoppingCart");

  const total = useMemo(() => {
    console.log("Calculating total...");
    return cart.reduce((sum: any, product: any) => sum + product.price, 0);
  }, [cart]);

  return (
    <div className="border border-red-600 p-5">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product: any, index: any) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <div>Total: ${total}</div>
    </div>
  );
};

const ECommerceApp = () => {
  const [products] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product: any) => {
    setCart((prevCart) => [...prevCart, product] as any);
  }, []);

  return (
    <PublicLayout title="Gita Session">
      <section className="main-container my-24">
        <div>
          <h1>E-Commerce App</h1>
          <ProductList products={products} addToCart={addToCart} />
          <ShoppingCart cart={cart} />
        </div>
      </section>
    </PublicLayout>
  );
};

export default ECommerceApp;
