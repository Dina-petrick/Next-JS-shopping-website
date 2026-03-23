"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  const tax = totalPrice * 0.08;
  const shipping = totalPrice > 150 ? 0 : 15;
  const grandTotal = totalPrice + tax + shipping;

  if (items.length === 0) {
    return (
      <div className="bg-gray-50 flex-grow pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="bg-white p-6 rounded-full inline-block mb-6 shadow-sm">
            <ShoppingBag className="h-16 w-16 text-indigo-200" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Your cart is empty
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-md">
            Looks like you haven&apos;t added any products to your cart yet. Discover something amazing in our store.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all"
          >
            Start Shopping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 flex-grow pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-10">
          Shopping Cart
        </h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          <div className="lg:col-span-7 xl:col-span-8">
            <ul className="divide-y divide-gray-200 border-t border-gray-200 bg-white shadow-sm rounded-2xl overflow-hidden border border-gray-100">
              {items.map((item) => (
                <li key={item.id} className="flex py-6 sm:py-8 px-4 sm:px-6 hover:bg-gray-50 transition-colors">
                  <div className="relative flex-shrink-0 h-24 w-24 sm:h-32 sm:w-32 rounded-xl overflow-hidden border border-gray-100">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 96px, 128px"
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6 relative">
                    <div>
                      <div className="flex justify-between items-start">
                        <div className="pr-6">
                          <h3 className="text-base sm:text-lg">
                            <Link href={`/products/${item.id}`} className="font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
                              {item.name}
                            </Link>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                        </div>
                        <p className="text-lg sm:text-xl font-bold text-gray-900 text-right">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 rounded-full bg-white">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-600 hover:text-indigo-600 transition-colors rounded-l-full"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium text-gray-900 text-sm">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-600 hover:text-indigo-600 transition-colors rounded-r-full"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-sm font-medium text-red-500 hover:text-red-600 flex items-center transition-colors p-2 rounded-lg hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4 mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">Remove</span>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Order summary */}
          <section className="mt-16 bg-white rounded-2xl border border-gray-100 px-6 py-8 sm:px-8 shadow-sm lg:mt-0 lg:col-span-5 xl:col-span-4 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
              Order Summary
            </h2>

            <dl className="mt-6 space-y-4 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <dt>Subtotal</dt>
                <dd className="font-medium text-gray-900">${totalPrice.toFixed(2)}</dd>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <dt className="flex items-center">
                  Shipping estimate
                </dt>
                <dd className="font-medium text-gray-900">
                  {shipping === 0 ? <span className="text-green-600 font-semibold">Free</span> : `$${shipping.toFixed(2)}`}
                </dd>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <dt>Tax estimate (8%)</dt>
                <dd className="font-medium text-gray-900">${tax.toFixed(2)}</dd>
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <dt className="text-lg font-bold text-gray-900">Order total</dt>
                <dd className="text-xl font-black text-indigo-600">${grandTotal.toFixed(2)}</dd>
              </div>
            </dl>

            <div className="mt-8">
              <Link
                href="/checkout"
                className="w-full flex items-center justify-center rounded-full border border-transparent bg-indigo-600 px-6 py-4 text-base font-medium text-white shadow-lg hover:shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Proceed to Checkout
              </Link>
            </div>
            
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                or{' '}
                <Link href="/products" className="text-indigo-600 font-medium hover:text-indigo-500 transition-colors">
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
