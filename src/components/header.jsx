import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
      <h1 className="text-2xl font-bold text-white">MOVIE APP</h1>
      <nav className="flex gap-6 text-lg font-medium">
        <Link
          to="/"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/favourite"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          Favourites
        </Link>
      </nav>
    </div>
  );
}

export default Header
