import React from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Products - LuminaStore",
  description: "Browse our complete collection of premium products.",
};

export default function ProductsPage() {
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  return (
    <div className="bg-gray-50 flex-grow py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
            Our Collection
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Discover perfectly crafted items designed to seamlessly integrate into your life.
          </p>
        </div>

        {/* Categories (Dumb filters just for visuals in this basic version) */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar justify-center">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${
                idx === 0 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center py-24 bg-white rounded-2xl border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900">No products found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your filters.</p>
          </div>
        )}

      </div>
    </div>
  );
}
