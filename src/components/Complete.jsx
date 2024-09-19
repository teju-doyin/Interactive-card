import React from 'react'
import tick from '/icon-complete.svg'
import Button from './Button'
const Complete = () => {
  return (
    <section>
        <div  className='w-[90%] mx-auto mt-9 text-center '>
            <img src={tick} alt="" className='mx-auto mb-7'  />
            <h1 className='text-veryDarkViolet font-semibold mb-3 text-3xl tracking-widest'>THANK YOU!</h1>
            <p className='text-darkViolet tracking-widest text-lg '>We&apos;ve added your details </p>
            <Button  text='Complete'/>
        </div>
    </section>
  )
}

export default Complete