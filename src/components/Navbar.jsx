import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo2.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-white">
      <div className="ml-6">
        <img src={Logo} alt="Logo" width="50px" />
      </div>
      {/* Menu */}

      <ul className="hidden md:flex">
        <li>
          <Link activeClass="active" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          {" "}
          <li>
            <Link
              onClick={handleClick}
              activeClass="active"
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <li>
            <Link
              onClick={handleClick}
              activeClass="active"
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <li>
            <Link
              onClick={handleClick}
              activeClass="active"
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <li>
            <Link
              onClick={handleClick}
              activeClass="active"
              to="work"
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </li>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <li>
            <Link
              onClick={handleClick}
              activeClass="active"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
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
    </div>
  );
};

export default Navbar;
