import React from 'react';
import { useGetProductQuery } from '../../context/api/product-api';
import Hero from '../../components/hero/Hero';
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const ProductList = () => {
    const { data: products = [], error, isLoading } = useGetProductQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const laylo = products.map(product => (
        <div key={product.id} className='max-w-[300px] h-[603px] flex flex-col gap-[22px] '>
            <div className='flex justify-center w-[300px] h-[300px] '>
                <img src={product.image_url} alt={product.name} className='object-contain  p-[10px]' />
            </div>
            <div className='flex flex-col gap-[12px] pr-[30px] px-[10px]'>
                <Link to={`/product/${product.id}`}>
                    <p className='text-[20px] text-[rgb(25,13,38) font-bold]'>{product.name}</p>
                </Link>
                <p className='text-[16px] text-[rgb(25,13,38) '>{product.description}</p>
                <div className='flex gap-[12px] mt-[32px] mb-[12px]'>
                    {product.color_options.map((color, index) => (
                        <p key={index} className='w-[30px] h-[30px] border  rounded-[50%]' style={{ backgroundColor: color }}>
                        </p>
                    ))}
                </div>
                <p className='font-bold text-[21px]'>$ {product.price}</p>
                <button className='flex gap-[10px] bg-[rgb(11,164,45)] items-center mt-[10px] text-white text-[22px] font-medium rounded-[10px] px-[33px] py-[16px]'><IoCartOutline /> Add to Cart </button>
            </div>
        </div>
    ));

    return (
        <div className='bg-white mb-[50px]'>
            <Hero />
            <div className='bg-[rgb(213,248,207)] py-[28px]  mb-[50px]'>
                <div className='container flex justify-between'>
                    <p className='text-[24px] text-[rgb(11,164,45)] '>Filter by:</p>
                    <select className='text-[24px] font-medium text-[rgb(11,164,45)] bg-inherit' name="" id="">
                        <option value="">Sort by</option>
                        <option value="">Expensive by</option>
                        <option value="">Cheap by</option>
                    </select>
                </div>

            </div>
            <div className="grid grid-cols-3 gap-[68px]  container ">
                {laylo}
            </div>
        </div>
    );
};

export default ProductList;
