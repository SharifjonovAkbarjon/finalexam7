import React, { useState } from 'react'
import { useGetBrandsQuery, useGetCategoryQuery, useGetColorsQuery } from '../../context/api/product-api';
import { CgCheck } from 'react-icons/cg';

const Brand = () => {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [currentColor, setCurrentColor] = useState("");
    const { data, isLoading } = useGetCategoryQuery(
        `${selectedBrands.length <= 0 ? "" : "brand_name="}${selectedBrands.join(
            "&brand_name="
        )}${currentColor
            ? `&color_options_like=${encodeURIComponent(currentColor)}`
            : ""
        }`
    );

    const { data: brands } = useGetBrandsQuery();
    const { data: colors } = useGetColorsQuery();

    const handleBrands = (event) => {
        const brand = event.target.dataset.brand;
        if (!selectedBrands.some((item) => item === brand)) {
            setSelectedBrands((prev) => [...prev, brand]);
        } else {
            setSelectedBrands((prev) => prev.filter((item) => item !== brand));
        }
    };
    return (
        <div>
            <div className="wrapper container py-10" id="products">
                <div className="md:w-[70%] w-[100%] lg:w-[70%]">
                    <h2 className="text-[22px] font-bold mb-3">Brand</h2>
                    {brands?.map((brand) => {
                        const checked = selectedBrands.some((item) => item === brand);
                        return (
                            <div key={brand} className="text-[22px] font-bold">
                                <input
                                    className="bg-[#0BA42D] text-[22px]"
                                    data-brand={brand}
                                    type="checkbox"
                                    checked={checked}
                                    onChange={handleBrands}
                                    id={brand}
                                />
                                <label
                                    htmlFor={brand}
                                    className="pl-[10px] text-[#190D26] text-[15px] cursor-pointer"
                                >
                                    {brand}
                                </label>
                            </div>
                        );
                    })}
                    <div className=" mt-[50px] md:w-[70%] w-[100%] lg:w-[70%]">
                        <div className="flex items-center justify-between">

                            <h2 className="text-[18px] mb-3 font-bold">Color</h2>
                            {/* <img src={Up} alt="" /> */}
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            {colors?.map((color) => {
                                return (
                                    <button
                                        key={color}
                                        className="w-[25px] h-[25px] rounded-full border-2 flex justify-center items-center"
                                        style={{
                                            background: color + "cc",
                                        }}
                                        onClick={() => setCurrentColor(color)}
                                    >
                                        {color == currentColor && <CgCheck className="text-white" size={32} />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <hr className="mt-[30px] border border-dashed md:w-[70%] w-[100%] lg:w-[70%]" />
                    <div className="md:w-[70%] w-[100%] lg:w-[70%] mt-[40px]">
                        <div className="flex  items-center justify-between">
                            <h2 className="text-[18px] font-[600] mb-3">SORT BY</h2>
                            {/* <img src={Up} alt="" /> */}
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className=" text-[#190D26] text-[18px] font-bold  cursor-pointer">
                                Best match
                            </p>
                            <p className=" text-[#190D26] text-[18px] font-bold cursor-pointer">New</p>
                            <p className=" text-[#190D26] text-[18px] font-bold cursor-pointer">Name</p>
                        </div>
                    </div>
                </div>

                {/* <Product
                    data={data}
                    isLoading={isLoading}
                    brands={brands}
                    colors={colors}
                /> */}
            </div>
        </div>
    )
}

export default Brand