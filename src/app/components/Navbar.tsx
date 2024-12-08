"use client";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <div className="text-2xl font-bold">SHOP.CO</div>

        <button
          className="block lg:hidden text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>

        {isMenuOpen && (
          <div className="lg:hidden w-full mt-4">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <Link
                  href="./cart"
                  className="hover:underline"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  On Sale
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Brands
                </Link>
              </li>
            </ul>
          </div>
        )}

        <ul className="hidden lg:flex space-x-8">
          <li>
            <Link href="./cart" className="hover:underline">
              Shop
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              On Sale
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Brands
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex space-x-4 items-center">
          <input
            type="text"
            placeholder="Search for products..."
            className="border rounded-full px-4 py-1"
          />
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          <FontAwesomeIcon icon={faUser} size="lg" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
