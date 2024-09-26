import React from 'react'
import disc from '../../assets/disc.png'
import earphone from '../../assets/earphone.png'
import boy from '../../assets/boy.png'

const Discover = () => {
    return (
        <>
            <div className='bg-[rgb(13,38,18)] py-[80px]'>
                <div className='container flex flex-col items-center gap-[75px]'>
                    <h2 className='text-white text-[30px]'>DISCOVER NEWS AND INNOVATIONS</h2>
                    <div className='flex  gap-[67px]'>
                        <div className='flex flex-col gap-[27px]  w-[312px] px-[10px] '> 
                            <div>
                                <img src={disc} alt="" />
                            </div>
                            <div className='text-white flex flex-col gap-[25px]'>
                                <h3 className='text-[23px]'>Always in the Game</h3>
                                <p className='text-[18px]'>Stay ahead of the latest and greatest gaming tech, featuring new releases, exclusive deals, and exciting pre-orders.</p>
                                <p className='text-[18px] font-medium border-b-[2px] w-[80px] cursor-pointer'>See More</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[27px]  w-[312px] px-[10px] '> 
                            <div>
                                <img src={earphone} alt="" />
                            </div>
                            <div className='text-white flex flex-col gap-[25px]'>
                                <h3 className='text-[23px]'>Enhance Your Experience</h3>
                                <p className='text-[18px]'>Upgrade Your World by Elevating your setup and personalize your space with our collection of stylish and functional gaming accessories.</p>
                                <p className='text-[18px] font-medium cursor-pointer border-b-[2px] w-[80px]'>See More</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[27px]  w-[312px] px-[10px] '> 
                            <div>
                                <img src={boy} alt="" />
                            </div>
                            <div className='text-white flex flex-col gap-[25px]'>
                                <h3 className='text-[23px]'>Command the Battle!</h3>
                                <p className='text-[18px]'>Take control with our diverse range of gaming keyboards, featuring mechanical switches for tactile feedback etc.</p>
                                <p className='text-[18px] font-medium cursor-pointer border-b-[2px] w-[80px]'>See More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discover