import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
import LogoImage from "../assets/images/logo-car-rent.png";


function NavBar({ searchTerm, setSearchTerm, loggedInUser, setLoggedInUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('user');
    setLoggedInUser(null);
    navigate('/');
  };

  const navLinks = [
    { path: '/', label: 'Home', end: true },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/bookings', label: 'My Bookings' },
  ];

  const navLinkClass = ({ isActive }) =>
    `relative px-3 py-2 font-semibold transition duration-300 ease-in-out ${
      isActive ? 'text-blue-400' : 'text-white hover:text-blue-300 hover:scale-105'
    }`;

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 h-20 midRange:h-24 bg-gray-700 shadow-md backdrop-blur-md"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4">
        <img
          className="h-12 w-12 rounded-full me-4"
          src={LogoImage}
          alt="Logo"
        />
<div className="text-white text-xl font-bold whitespace-nowrap">
  <div className="text-2xl font-bold tracking-wide uppercase italic">Ak Car Rents</div>
  <div className="text-sm font-medium text-blue-300 -mt-1 italic uppercase">Choose the Best</div>
</div>

       
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map(({ path, label, end }) => (
            <li key={path}>
              <NavLink to={path} end={end} className={navLinkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

     
        <div className="hidden md:flex items-center bg-white rounded-full px-3 py-1 shadow-sm w-36 md:w-48 lg:w-64">
          <Search className="text-gray-500 w-4 h-4 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none text-sm text-gray-700 w-full placeholder-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

       
        <div className="hidden md:flex items-center space-x-3 ml-4">
          {loggedInUser ? (
            <>
              <span className="text-white font-medium">
                Hi, {loggedInUser.name?.split(' ')[0]}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-1.5 rounded-full text-sm font-medium text-white border border-red-400 hover:bg-red-400 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-4 py-1.5 rounded-full text-sm font-medium text-white border border-blue-400 hover:bg-blue-400 transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="px-4 py-1.5 rounded-full text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 transition"
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>

        
       <button className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

   
      <AnimatePresence>
        {isOpen && (
           <motion.div
  className="md:hidden w-full bg-gray-800 text-white flex flex-col items-center space-y-4 pb-4 pt-4 z-50 shadow-md"
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: 'auto', opacity: 1 }}
  exit={{ height: 0, opacity: 0 }}
  transition={{ duration: 0.3 }}
>


            <ul className="flex flex-col items-center space-y-2">
              {navLinks.map(({ path, label, end }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end={end}
                    onClick={() => setIsOpen(false)}
                    className={navLinkClass}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

          
            <div className="flex items-center bg-white rounded-full px-3 py-1 w-11/12 max-w-sm shadow-sm">
              <Search className="text-gray-500 w-4 h-4 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent focus:outline-none text-sm text-gray-700 w-full placeholder-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            
            <div className="flex flex-col items-center space-y-2 pt-2">
              {loggedInUser ? (
                <>
                  <span className="text-white font-medium">
                    Hi, {loggedInUser.name?.split(' ')[0]}
                  </span>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="text-white text-sm px-4 py-1 border border-red-400 rounded-full hover:bg-red-400 transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="text-white text-sm px-4 py-1 border border-blue-400 rounded-full hover:bg-blue-400 transition"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="text-white text-sm px-4 py-1 bg-blue-500 rounded-full hover:bg-blue-600 transition"
                  >
                    Sign Up
                  </NavLink>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default NavBar;




















