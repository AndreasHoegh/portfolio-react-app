import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo2.png";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const scrollDirection = useScrollDirection();
  const handleClick = () => setNav(!nav);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Work", to: "work" },
    { name: "Contact", to: "contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <>
      <div
        className={`fixed w-full h-[80px] flex justify-between items-center px-4 bg-stone-100 text-gray-800 z-[10] transition-transform duration-300 ${
          scrollDirection === "down" ? "-translate-y-full" : ""
        } ${nav ? "!translate-y-0" : ""}`}
      >
        <div className="ml-6">
          <img
            src={Logo}
            alt="Logo"
            width="50px"
            onClick={scrollToTop}
            className="cursor-pointer"
          />
        </div>
        {/* Menu */}

        <ul className="hidden md:flex gap-x-8">
          {menuItems.map(({ name, to }) => (
            <li key={name} className="hover:text-gray-600 cursor-pointer">
              <Link to={to} smooth={true} duration={500}>
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden z-50 cursor-pointer" onClick={handleClick}>
          <motion.div
            initial={false}
            animate={{ rotate: nav ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 w-full h-screen bg-stone-100 flex flex-col justify-center items-center"
            >
              <motion.ul className="flex flex-col items-center gap-8">
                {menuItems.map(({ name, to }) => (
                  <motion.li
                    key={name}
                    variants={itemVariants}
                    className="text-4xl hover:text-gray-600"
                  >
                    <Link
                      onClick={handleClick}
                      to={to}
                      smooth={true}
                      duration={500}
                      className="relative group"
                    >
                      {name}
                      <motion.span
                        className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300"
                        initial={{ width: "0%" }}
                        whileHover={{ width: "100%" }}
                      />
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Social Icons - moved outside the main navbar div */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-20">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/andreashogh"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/AndreasHoegh"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          {/*           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
