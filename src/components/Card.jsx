import React from 'react'
import backCard from '/bg-card-back.png'
import frontCard from '/bg-card-front.png'
import logo from '/card-logo.svg'
const Card = ({user}) => {
  return (
    <section className='bg-mobile  text-white relative'>
        <div className="relative top-8 left-[75px]">
            <img src={backCard} width={320} />
            <p className='absolute top-[73px] left-64'>{user.cvc}</p>
        </div>
        <div className='relative bottom-11 left-3  w-[75%]'>
            <img src={frontCard} width={320}/>
            <div className=" absolute top-0 p-5  w-full">
                <div className=" ">
                    <img src={logo} width={50} />
                    <p className='mt-10 mb-4 w-full text-lg tracking-[.2rem]'>
                        <span className="block text-justify g-red">{user.card}</span>
                    </p>
                    <div className='flex justify-between '>
                        <p className='capitalize'>{user.name}</p>
                        <p>{user.month}/{user.year}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Card