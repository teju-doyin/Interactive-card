import React, { useState } from 'react'
import Button from './Button'
import Complete from './Complete'

const UserInput = ({user, setter}) => {
    const [isComplete, setIsComplete] = useState(false)
    const handleSubmit =(e)=>{
        e.preventDefault()
        setIsComplete(true)
    }
    const handleChange =(e)=>{
       const {name, value} = e.target 
       setter(prevState =>({
        ...prevState, [name]: value
       }))
       
    }
  return (
    <section className=''>
        {isComplete? <Complete/>:
            <form action="" className='w-[90%] mx-auto ' onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 mb-5">
                <label className='text-veryDarkViolet tracking-[.15rem] text-[.9rem] font-semibold' >CARDHOLDER NAME</label>
                <input 
                    name='name'
                    value={user.name} 
                    onChange={handleChange} 
                    className='input' 
                    type="text" 
                    placeholder='e.g. Jane Appleseed'  />
            </div>
            <div className="flex flex-col gap-1 mb-5">
                <label className='text-veryDarkViolet tracking-[.15rem] text-[.9rem] font-semibold' >CARD NUMBER</label>
                <input 
                    name='card'
                    value={user.card} 
                    onChange={handleChange} 
                    className='input' 
                    type="number" 
                    placeholder='e.g. 1234 5678 9123 0000' />
            </div>
            <div className=" flex items-end gap-1  justify-betwee ">
                <div className="flex flex-col gap-1 w-[20%] mr-2 overflow-auto">
                    <label className='text-veryDarkViolet tracking-[.15rem] text-[.9rem] font-semibold' >EXP. DATE </label>
                    <input 
                        name='month'
                        value={user.month} 
                        onChange={handleChange} 
                        className='input' 
                        type="number" 
                        placeholder='MM' />
                </div>
                <div className="flex flex-col gap-1 w-[20%]">
                    <label className='text-veryDarkViolet tracking-[.15rem] text-[.9rem] font-semibold' ></label>
                    <input 
                        name='year'
                        value={user.year} 
                        onChange={handleChange} 
                        className='input' 
                        type="number" 
                        placeholder='YY' />
                </div>
                <div className="flex flex-col gap-1 w-[50%] ml-auto">
                    <label className='text-veryDarkViolet tracking-[.15rem] text-[.9rem] font-semibold' >CVV</label>
                    <input 
                        name='cvc'
                        value={user.cvc} 
                        onChange={handleChange} 
                        className='input' 
                        type="number" 
                        placeholder='e.g. 123' />
                </div>
            </div>
            <Button text='Confirm'/>
        </form>}
    </section>
  )
}

export default UserInput