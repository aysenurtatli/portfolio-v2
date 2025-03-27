import React from 'react'

const Input = ({type, placeholder, value, onChange}) => {
  return (
        <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className='bg-zinc-900 p-[1rem] w-full rounded-md text-zinc-400 focus:outline-none'
        />
  )
}

export default Input