import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { ShoppingCartContext } from '../context/shoppingCartContext';

const Navbar = () => {
  const {cartItems, wishlistItems} = useContext(ShoppingCartContext);
  return (
    <div className="sticky top-0 w-full z-10">
      <nav className="bg-[#353b48] text-white w-[1450px] mx-auto rounded-xl shadow-md shadow-slate-700">
        <div className="px-5 xl:px-12 py-4 w-full flex justify-between">
          <Link to="/" className="text-3xl font-bold font-heading">
            Shopping Cart
          </Link>
          {/* Header Icons  */}
          <div className="flex items-center space-x-12">
            <Link to="/" className="hover:text-gray-200 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="relative inline-flex rounded-full h-3 w-3 bottom-2 left-2">
                  {wishlistItems?.length ? wishlistItems.length : 0}
                </span>
              </span>
            </Link>
            <Link
              to="/shopping-cart"
              className="flex items-center hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="relative inline-flex rounded-full h-3 w-3 bottom-2 left-2">
                  {cartItems?.length ? cartItems.length : 0}
                </span>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
