import React from "react";
import Link from "next/link";
import { Store, Github, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
              <Store className="h-6 w-6" />
              <span>LuminaStore</span>
            </Link>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Curating the finest products for your modern lifestyle. Quality meets aesthetics in every item we offer.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Shop</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/products" className="text-base text-gray-500 hover:text-indigo-600 transition-colors">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/products?category=Electronics" className="text-base text-gray-500 hover:text-indigo-600 transition-colors">
                      Electronics
                    </Link>
                  </li>
                  <li>
                    <Link href="/products?category=Fashion" className="text-base text-gray-500 hover:text-indigo-600 transition-colors">
                      Fashion
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-indigo-600 transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-indigo-600 transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-indigo-600 transition-colors">
                      Shipping & Returns
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} LuminaStore, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
