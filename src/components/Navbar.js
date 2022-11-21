import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl px-2">
          Best<span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus: outline-none"
          type="text"
          placeholder="Serach food..."
        />
      </div>

      {/* card button */}
      <div>
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
          <BsFillCartFill size={20} className="mr-2" /> Cart
        </button>
      </div>

      {/* mobile menu */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* side drawer */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">East</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li
              className="text-xl py-4 flex cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              <TbTruckDelivery className="mr-4" size={25} /> Orders
            </li>
            <li
              className="text-xl py-4 flex cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              <MdFavorite className="mr-4" size={25} /> Favorites
            </li>
            <li
              className="text-xl py-4 flex cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              <FaWallet className="mr-4" size={25} /> Wallet
            </li>
            <li
              className="text-xl py-4 flex cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              <MdHelp className="mr-4" size={25} /> Help
            </li>
            <li
              className="text-xl py-4 flex cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              <AiFillTag className="mr-4" size={25} /> Promotions
            </li>
            <li
              className="text-xl py-4 flex cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              <BsFillSaveFill className="mr-4" size={25} /> Best Ones
            </li>
            <li
              className="text-xl py-4 flex cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              <FaUserFriends className="mr-4" size={25} /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
