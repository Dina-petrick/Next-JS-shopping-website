"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShoppingCart, ArrowLeft, Check, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find(p => p.id === resolvedParams.id);
  
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return notFound();
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white flex-grow pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/products" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-indigo-600 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to products
        </Link>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse">
            <div className="w-full aspect-square relative rounded-3xl overflow-hidden bg-gray-100 mb-8 lg:mb-0 shadow-sm border border-gray-100">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                priority
                className="object-cover object-center w-full h-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 lg:mt-0 flex flex-col pt-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
            
            <div className="mt-4">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900 font-bold tracking-tight">${product.price.toFixed(2)}</p>
            </div>

            <div className="mt-6 flex items-center">
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
                {product.category}
              </span>
              <span className="ml-4 inline-flex items-center text-sm text-green-600 font-medium">
                <Check className="mr-1.5 h-4 w-4" />
                In stock and ready to ship
              </span>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <div className="mt-4 prose prose-sm text-gray-500 text-base leading-relaxed">
                <p>{product.description}</p>
                <p className="mt-4">
                  Every product is crafted with the utmost attention to detail to ensure premium quality
                  and a seamless experience. Our design philosophy focuses on both form and function.
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-8 flex flex-col md:flex-row gap-6">
              <div className="flex items-center border border-gray-300 rounded-full bg-white max-w-max">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 py-3 text-gray-600 hover:text-indigo-600 transition-colors rounded-l-full focus:outline-none"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium text-gray-900 text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-5 py-3 text-gray-600 hover:text-indigo-600 transition-colors rounded-r-full focus:outline-none"
                >
                  +
                </button>
              </div>
              
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={added}
                className={`flex-1 flex items-center justify-center rounded-full py-4 px-8 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 transition-all ${
                  added 
                    ? 'bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30' 
                    : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/30'
                }`}
              >
                {added ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="flex-shrink-0 bg-gray-50 rounded-full p-2">
                  <Truck className="h-5 w-5 text-gray-400" />
                </div>
                <span>Free Next-Day Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="flex-shrink-0 bg-gray-50 rounded-full p-2">
                  <ShieldCheck className="h-5 w-5 text-gray-400" />
                </div>
                <span>1 Year Warranty</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="flex-shrink-0 bg-gray-50 rounded-full p-2">
                  <RotateCcw className="h-5 w-5 text-gray-400" />
                </div>
                <span>30-Day Free Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
