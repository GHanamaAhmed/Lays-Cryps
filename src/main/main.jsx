import React from 'react'

export default function Main() {
    return (
        <div className='flex flex-col items-center main md:flex-row-reverse md:justify-between md:px-0 md:pb-14 gap-y-8 pb-6'>
            <div className='rounded-full relative w flex self-end justify-center items-center'>
                <img className='w-full md:w-2/3 lg:w-10/12' src="./icons/Union.png" alt="" />
                <img className='absolute w-2/3 top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2' src="./icons/lays.png" alt="" />
            </div>
            <div className='flex flex-col md:w-1/2 md:ml-10 px-5 md:px-0 items-center gap-y-8'>
                <div className='px-2'>
                    <p className='text-4xl md:text-5xl lg:text-6xl font font-semibold font-serif inline-block'>
                        Feel the Best Taste With Lays Crisps
                        <img className='inline-block ml-2 w-1/6 md:w-1/12 ' src="./icons/image18.png" alt="" />
                    </p>
                </div>
                <p className='px-2 lg:text-lg text-justify'>
                    Feel the best and awesome taste with Lays Crisps. There has been various kind of Crisps you can eat and feel the wonder taste of this awesome product.
                </p>
                <button className='rounded-md py-2 px-4 bg-zinc-900 text-slate-100 self-start ml-10'>All Crisps</button>
            </div>
        </div>
    )
}
