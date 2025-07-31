import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 ">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-lg font-semibold uppercase italic">ak car rents</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
        </div>

        <nav className="flex space-x-4 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/bookings" className="hover:underline">My Bookings</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
