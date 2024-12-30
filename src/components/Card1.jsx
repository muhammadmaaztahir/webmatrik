import React from 'react'

const Card1 = (props) => {
    return (
        <>
            <div className='shadow-xl hover:shadow-md cursor-pointer  transition ease-in-out pb-12 rounded-2xl mt-20'>
                <img className='w-[70%] lg:w-1/2 mx-auto' src={props.img} alt="" />
                <div className='mt-10 px-8'>
                    <h1 className='text-xl uppercase font-bold text-[#6E5BAB] mb-3'>{props.heading}</h1>
                    <p className='mb-5'>{props.para}</p>
                    <button className='text-[#FD7E14] bg-transparent transition ease-in-out hover:bg-[#2867F0] hover:text-white rounded-full py-2'>Explore More</button>
                </div>
            </div>
        </>
    )
}

export default Card1
