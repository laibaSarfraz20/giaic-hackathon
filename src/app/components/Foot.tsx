import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start">
            {/* Section 1 */}
            <div className="flex-1 mx-2 mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">SHOP.CO</h3>
              <p>
                We have clothes that suit your style and that you're proud to wear. From women to men.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-600">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="text-gray-600">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="text-gray-600">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="text-gray-600">
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex-1 mx-2 mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">COMPANY</h3>
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-600">About</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Features</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Works</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Career</a></li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="flex-1 mx-2 mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">HELP</h3>
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-600">Customer Support</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Delivery Details</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Terms & Conditions</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="flex-1 mx-2 mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">FAQ</h3>
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-600">Account</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Manage Deliveries</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Orders</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Payments</a></li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="flex-1 mx-2 mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">RESOURCES</h3>
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-600">Free eBooks</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Development Tutorial</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">How to - Blog</a></li>
                <li className="mb-2"><a href="#" className="text-gray-600">Youtube Playlist</a></li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <p className="text-gray-600">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex space-x-4">
              <Image src="https://placehold.co/40x20" alt="Visa" width={40} height={20} />
              <Image src="https://placehold.co/40x20" alt="MasterCard" width={40} height={20} />
              <Image src="https://placehold.co/40x20" alt="PayPal" width={40} height={20} />
              <Image src="https://placehold.co/40x20" alt="Apple Pay" width={40} height={20} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

