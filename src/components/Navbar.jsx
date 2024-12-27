import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaDribbble, FaBars } from "react-icons/fa";
import { FaXTwitter, FaXmark } from "react-icons/fa6";
import Modal from './Modal';



const Navbar = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
      { path: "/", link: "Home" },
      { path: "/services", link: "Services" },
      { path: "/about", link: "About" },
      { path: "/blogs", link: "Blogs" },
      { path: "/contact", link: "Contact" },
    ];
      
    const openModal = () => {
      setIsModalOpen(true);
    }

    const closeModal = () => {
      setIsModalOpen(false);
    }
     
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-20">
      <nav className="p-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">
          Aruby<span className="text-orange-500">Blog</span>
        </a>

        {/* Navitems for large devices */}
        <ul className="hidden md:flex gap-12 text-lg">
          {navItems.map(({ path, link }) => (
            <li key={link}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-orange-500 underline" : "text-white"
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Menu icons */}
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href="/" className="hover:text-orange-500">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaDribbble />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaXTwitter />
          </a>
          <button

          onClick={openModal}
            className="bg-orange-500 px-6 py-2 font-normal rounded
           hover:bg-white hover:text-orange-200 transition-all
            duration-500 ease-in"
          >
            Log in
          </button>
        </div>

        {/* Modal component is here */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />

        {/* Mobile menu btn, display mobile screen */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Menu items only for mobile */}

      <div>
        <ul
          className={`md:hidden  h-80 flex flex-col items-center gap-2 text-lg space-y-4 px-4
         py-6 mt-14 bg-white ${
           isMenuOpen ? "fixed inset-1 left-0 w-full" : "hidden"
         }`}
        >
          {navItems.map(({ path, link }) => (
            <li key={link} className="text-black">
              <NavLink
                onClick={toggleMenu}
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-orange-500 underline" : "text-black"
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar