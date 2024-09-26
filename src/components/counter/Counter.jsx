import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../context/counter-slice';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);

    return (
        <div className='flex items-center gap-[62px]'>
            <div className='flex items-center  border-[rgb(11,164,45)] border-[3px] text-[22px] w-[190px] rounded-[40px] h-[65px] justify-center gap-[20px] px-[20px]'>
                <button onClick={() => dispatch(decrement())} disabled={count === 0}><FaMinus /></button>
                <h1>{count}</h1>
                <button onClick={() => dispatch(increment())}> <FaPlus /> </button>
            </div>
            <div className='flex w-[150px]'>
                <p className='text-[18px] font-semibold'>Only <span className='text-[rgb(11,164,45)]'> 16 items</span> left! Don’t miss it </p>
            </div>
        </div>

    );
};

export default Counter;