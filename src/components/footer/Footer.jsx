import React from 'react'
import './footer.scss'
import game from '../../assets/game.svg'
import twitter from '../../assets/twit.svg'
import linkedin from '../../assets/in.svg'
import face from '../../assets/face.svg'
import ins from '../../assets/ins.svg'
import footer from '../../assets/footer.svg'
import ask from '../../assets/soroq.svg'

const Footer = () => {
    return (
        <div className='bg-[rgb(13,38,18)] py-[100px]'>
            <div className='container  flex  flex-col gap-[50px]'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-[150px] w-[20%]'>
                        <div className='flex flex-col gap-[24px]'>
                            <img className='w-[98px]' src={game} alt="" />
                            <p className='f_p'>START YOUR GAME WITH THE BEST</p>
                        </div>
                        <div className='flex gap-[22px]'>
                            <img src={twitter} alt="" />
                            <img src={linkedin} alt="" />
                            <img src={face} alt="" />
                            <img src={ins} alt="" />
                        </div>
                    </div>
                    <div className='flex gap-[125px]'>
                        <div className='service'>
                            <p>Services</p>
                            <ul className='ull'>
                                <li>Gift Card</li>
                                <li>Mobile App</li>
                                <li>Shipping & Delivery</li>
                                <li>Order Pickup</li>
                                <li>Account Signup</li>
                            </ul>
                        </div>
                        <div className='service'>
                            <p>Help</p>
                            <ul className='ull'>
                                <li>ShopCart Help</li>
                                <li>Returns</li>
                                <li>Track Orders</li>
                                <li>Contact Us</li>
                                <li>Feedback</li>
                                <li>Security & Fraud</li>
                            </ul>
                        </div>
                        <div className='service'>
                            <p>About Us</p>
                            <ul className='ull'>
                                <li>News & Blog</li>
                                <li>Help</li>
                                <li>Press Center</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='end_part'>
                    <div className='w-[100%] h-1 bg-white'></div>
                    <div className='paragraph'>
                        <img src={footer} alt="" />
                        <div className='flex gap-4 items-center'>
                            <img src={ask} alt="" />
                            <p>Help Center</p>
                        </div>
                        <p>Privacy & Policy</p>
                        <p>Terms of Service</p>
                        <p>All rights reserved by GameGeek | 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer