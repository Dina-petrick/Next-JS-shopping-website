import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Truck } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col flex-grow">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-indigo-50/50 -skew-y-2 transform origin-top-left -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32 flex flex-col items-center text-center">
          <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-4 px-3 py-1 bg-indigo-50 rounded-full inline-block">
            Welcome to the future of shopping
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
            Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Excellence</span> for <br className="hidden sm:block" /> Your Lifestyle.
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mb-10 mx-auto">
            Discover our handpicked collection of premium products designed to elevate your everyday experiences. Quality meets aesthetics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Shop Collection
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </Link>
            <Link 
              href="/products?category=Electronics" 
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-base font-medium rounded-full text-indigo-600 bg-white hover:bg-gray-50 md:text-lg transition-all"
            >
              View Electronics
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl md:rounded-none">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-full mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Delivery</h3>
              <p className="text-gray-500">On all orders over $150. Fast and reliable shipping worldwide.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl md:rounded-none">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-full mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-500">100% secure payment processing with industry-leading encryption.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl md:rounded-none">
              <div className="p-3 bg-green-50 text-green-600 rounded-full mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-500">Curated products with 30-day money-back guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Featured Items</h2>
              <p className="mt-3 text-lg text-gray-500">Handpicked selections for you</p>
            </div>
            <Link href="/products" className="hidden sm:flex items-center text-indigo-600 hover:text-indigo-500 font-medium group">
              View all
              <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 sm:hidden flex justify-center">
            <Link href="/products" className="flex items-center text-indigo-600 hover:text-indigo-500 font-medium">
              View all products
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
