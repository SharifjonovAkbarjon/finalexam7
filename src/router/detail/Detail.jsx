import React, { useEffect } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../context/api/product-api';
import { IoCartOutline } from "react-icons/io5";
import { PiVanBold } from "react-icons/pi";
import { IoIosArchive } from "react-icons/io";
import star from '../../assets/star.svg'
import Counter from '../../components/counter/Counter';
import { FaRegHeart } from 'react-icons/fa';


const Detail = () => {
    const { id } = useParams();
    const { data } = useGetProductByIdQuery(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bg-white '>
            <div className="container flex flex-col gap-[42px]">
                <div className='flex flex-col gap-[40px]'>
                    <div className='w-full h-[1px] bg-black opacity-15'></div>
                    <p> <NavLink to="/product">Products</NavLink> / Gaming Headsets & Audio  /  <span className='font-bold'>{data?.name}</span> </p>
                </div>
                <div className='flex mb-[50px] justify-between'>
                    <div className='w-[700px] flex flex-col gap-[145px]'>
                        <div>
                            <img className='w-[80%] justify-center ' src={data?.image_url} alt="" />
                        </div>
                        <div className='flex gap-[20px] ml-[-40px] cursor-pointer '>
                            <img className='w-[15%] justify-center border p-[10px]' src={data?.image_url} alt="" />
                            <img className='w-[15%] justify-center border p-[10px]' src={data?.image_url} alt="" />
                            <img className='w-[15%] justify-center border p-[10px]' src={data?.image_url} alt="" />
                            <img className='w-[15%] justify-center border p-[10px]' src={data?.image_url} alt="" />
                            <img className='w-[15%] justify-center border p-[10px]' src={data?.image_url} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col gap-[18px]'>
                            <h2 className='text-[48px] font-medium'>{data?.name}</h2>
                            <p className='text-[18px] font-medium'>{data?.description}</p>
                            <div className='flex items-center gap-3'>
                                <img src={star} alt="" />
                                <p>({data?.rating_counts})</p>
                            </div>
                            <div className='w-full h-[1px] border-dashed border-black border-[2px] '></div>
                            <p className='text-[36px] font-bold'>$ {data?.price} or 99/month</p>
                            <p className='text-[18px] font-medium'>Suggested payments with 6 month  special financing</p>
                            <div className='w-full h-[1px] border-dashed border-black border-[2px] '></div>
                            <div className='flex flex-col'>
                                <p className='font-bold text-[24px]'>Choose a color</p>
                                <div className='flex gap-[12px] mt-[32px] mb-[12px]'>
                                    {data?.color_options.map((color, index) => (
                                        <p key={index} className='w-[30px] h-[30px] border cursor-pointer mt-[-20px]  rounded-[50%]' style={{ backgroundColor: color }}>
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className='w-full h-[1px] border-dashed border-black border-[2px] mb-[10px] '></div>
                            <Counter />
                            <div className='flex items-center gap-[17px]'>
                                <button className='flex gap-[10px] bg-[rgb(11,164,45)] items-center mt-[10px] text-white text-[22px] font-medium rounded-[10px] px-[103px] py-[16px]'><IoCartOutline /> Add to Cart </button>
                                <div className='border-[3px] rounded-[10px] border-[rgb(13,38,18)] p-[20px] mt-2'>
                                    <FaRegHeart className='' />
                                </div>
                            </div>
                        </div>
                        <div className='border-dashed border-[4px] rounded-[15px] mt-[50px]'>
                            <div className='flex items-center gap-[28px] p-[15px]'>
                                <div>
                                    <PiVanBold className='text-[rgb(11,164,45)]' />
                                </div>
                                <div>
                                    <p className='text-[18px] font-bold'>Free delivery</p>
                                    <p className='text-[16px] border-b-[1px] border-black  w-[340px]'>Enter your Postal Code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className='w-full h-[1px] border-dashed border-[3px] '></div>
                            <div className='flex items-center gap-[28px] p-[15px]'>
                                <div>
                                    <IoIosArchive className='text-[rgb(11,164,45)]' />
                                </div>
                                <div>
                                    <p className='text-[18px] font-bold'>Return Delivery</p>
                                    <p className='text-[16px] border-b-[1px] border-black  w-[340px]'>Free delivery 30 Days return</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;

