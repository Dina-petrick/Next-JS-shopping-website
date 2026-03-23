"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShieldCheck, CheckCircle, ArrowLeft } from "lucide-react";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const tax = totalPrice * 0.08;
  const shipping = totalPrice > 150 ? 0 : 15;
  const grandTotal = totalPrice + tax + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-gray-50 flex-grow pt-24 pb-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="rounded-full bg-green-100 p-4 mb-6 ring-8 ring-green-50">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            Payment successful!
          </h1>
          <p className="text-lg text-gray-500 mb-10">
            Thank you for your order. We are processing it right now and will send you a confirmation email shortly.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="bg-gray-50 flex-grow pt-20 pb-24 text-center">
         <h1 className="text-3xl font-extrabold text-gray-900 mb-4">You have nothing to checkout</h1>
         <Link href="/products" className="text-indigo-600 hover:text-indigo-700 font-medium">Browse our products</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Link href="/cart" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Cart
          </Link>
        </div>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-7 xl:col-span-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Checkout</h1>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Contact Info */}
              <div className="bg-white px-6 py-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Contact information</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="block w-full max-w-lg rounded-xl flex-1 border border-gray-300 py-2.5 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-white px-6 py-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping details</h2>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                    <input type="text" id="first-name" required className="block w-full rounded-xl flex-1 border border-gray-300 py-2.5 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 outline-none" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                    <input type="text" id="last-name" required className="block w-full rounded-xl flex-1 border border-gray-300 py-2.5 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 outline-none" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input type="text" id="address" required className="block w-full rounded-xl flex-1 border border-gray-300 py-2.5 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 outline-none" />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input type="text" id="city" required className="block w-full rounded-xl flex-1 border border-gray-300 py-2.5 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 outline-none" />
                  </div>
                  <div>
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700 mb-1">Postal code</label>
                    <input type="text" id="postal-code" required className="block w-full rounded-xl flex-1 border border-gray-300 py-2.5 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 outline-none" />
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-white px-6 py-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 flex gap-2 text-gray-300">
                  <ShieldCheck className="h-6 w-6 text-green-500" />
                  <span className="text-xs font-semibold uppercase text-gray-400 mt-1 tracking-wider">Secure</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">Card number</label>
                    <input type="text" id="card-number" required placeholder="0000 0000 0000 0000" className="block w-full max-w-lg rounded-xl flex-1 border border-gray-300 py-2.5 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 outline-none font-mono" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-w-lg">
                    <div>
                      <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700 mb-1">Expiration date (MM/YY)</label>
                      <input type="text" id="expiration-date" required placeholder="MM/YY" className="block w-full rounded-xl flex-1 border border-gray-300 py-2.5 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 outline-none" />
                    </div>
                    <div>
                      <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                      <input type="text" id="cvc" required placeholder="000" className="block w-full rounded-xl flex-1 border border-gray-300 py-2.5 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pb-10 lg:pb-0">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-full shadow-lg text-lg font-medium text-white transition-all ${
                    isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl shadow-indigo-600/20'
                  }`}
                >
                  {isSubmitting ? 'Processing...' : `Pay $${grandTotal.toFixed(2)}`}
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 xl:col-span-4 mt-16 lg:mt-0">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm sticky top-24">
              <div className="px-6 py-8 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
              </div>
              <ul className="divide-y divide-gray-100 max-h-96 overflow-y-auto px-6 py-4">
                {items.map((item) => (
                  <li key={item.id} className="flex py-4">
                    <div className="flex-shrink-0 relative w-16 h-16 rounded-lg overflow-hidden border border-gray-100">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <span className="font-semibold text-gray-900 text-sm line-clamp-2">{item.name}</span>
                      <span className="text-gray-500 text-sm mt-1">Qty {item.quantity}</span>
                    </div>
                    <div className="ml-4 font-bold text-gray-900 text-sm text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="px-6 py-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
                <dl className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <dt>Subtotal</dt>
                    <dd className="font-medium text-gray-900">${totalPrice.toFixed(2)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt>Shipping</dt>
                    <dd className="font-medium text-gray-900">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt>Taxes</dt>
                    <dd className="font-medium text-gray-900">${tax.toFixed(2)}</dd>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200 mt-3 text-base">
                    <dt className="font-bold text-gray-900">Total</dt>
                    <dd className="font-black text-indigo-600 text-lg">${grandTotal.toFixed(2)}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
