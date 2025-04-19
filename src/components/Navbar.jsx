import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";


import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="navbar bg-base-100 shadow-sm w- mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 3</a></li>
                                <NavLink to='/'>Home</NavLink>
                            </ul>
                        </div>
                        <a className="text-xl">PhoneHutt</a>
                    </div>
                    <div className="navbar-center ">

                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-red-500' : '')}>Home</NavLink></li>
                            <li><NavLink to='/about' className={({ isActive }) => (isActive ? 'text-red-500' : '')}>About</NavLink></li>
                            <li><NavLink to='/'><IoCartOutline size={24} /></NavLink></li>
                            <li><NavLink to='/'><CiBookmark size={24} /></NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;