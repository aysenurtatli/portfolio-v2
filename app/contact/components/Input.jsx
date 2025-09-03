import React from 'react'

const Input = ({type, placeholder, value, onChange}) => {
  return (
        <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className='bg-transparent backdrop-blur-sm font-mono border border-white/20 p-[1rem] w-full rounded-md text-zinc-300 hover:border-indigo-200 duration-300 focus:outline-none focus:border-indigo-200 placeholder:text-zinc-300'
        />
  )
}

export default Input