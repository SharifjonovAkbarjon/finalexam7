import React from 'react'
import "../hero/hero.scss"

const Hero = () => {
    return (
        <>
            <div className='hero object-contain'>
                <div className='container flex flex-col gap-[32px] text-white'>
                    <div className='flex flex-col mt-[150px]'>
                        <p>/ Start / Categories </p>
                        <p>/ Headphones and audio for gaming</p>
                    </div>
                    <div className='w-[50%]'>
                        <h2 className='text-[46px] font-medium'>Headphones AND AUDIO FOR GAMING</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero