import React from 'react'
import gg from '../../assets/gg.svg'
import "../header/header.scss"
import { FiPhoneIncoming } from "react-icons/fi";
import english from "../../assets/english.svg"
import { CiGlobe } from "react-icons/ci";
import geek from '../../assets/geek.svg'
import { FaMagnifyingGlass, FaRegUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';





const Header = () => {
    return (
        <>
            <div className=''>
                <div className='Header'>
                    <div className='container head '>
                        <div className='flex gap-[32px] items-center'>
                            <div>
                                <img src={gg} alt="" />
                            </div>
                            <div className='flex items-center gap-[17px] text-white'>
                                <FiPhoneIncoming />
                                <p>+4904-049-950</p>
                            </div>
                        </div>
                        <div className='flex gap-[25px] text-white'>
                            <p>Get 50% Off on the Selected items </p>
                            <div className='w-[2px] h-[30px] bg-[rgb(20,255,0)]'></div>
                            <p>Shop now</p>
                        </div>
                        <div className='flex items-center gap-[44px] text-white'>
                            <div className='flex gap-[11px]'>
                                <select className='bg-inherit' name="" id="">
                                    <option value="">English <img src={english} alt="" /></option>
                                    <option value="">Uzb</option>
                                    <option value="">Russian</option>
                                </select>
                                <img src={english} alt="" />
                            </div>
                            <div className='flex gap-[10px] items-center'>
                                <CiGlobe />
                                <p>Location</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className=' flex   justify-between py-[40px]'>
                        <div>
                            <NavLink to="/">
                                <img src={geek} alt="" />
                            </NavLink>
                        </div>
                        <div>
                            <ul>
                                <li><NavLink to="/product">Products</NavLink></li>
                                <li>Brands</li>
                                <li>What’s new</li>
                                <li>Sales</li>
                                <li>Help</li>
                                <li>About</li>
                            </ul>
                        </div>
                        <div className='flex items-center gap-[42px]'>
                            <FaMagnifyingGlass />
                            <FaRegUser />
                            <NavLink to="/cart">
                                <IoCartOutline />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header