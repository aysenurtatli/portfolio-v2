import React from 'react'

const IconList = ({title, items}) => {
  return (
    <div>
        <span className='text-zinc-300 font-mono text-[20px] block mb-2'>{title}</span>
        <div className='flex flex-wrap gap-3 items-center text-zinc-300'>
            {items.map((item, index) => (
              <div key={index} className='border border-white/30 w-20 h-20 flex items-center backdrop-blur-sm justify-center rounded-md hover:border-indigo-200 duration-300'>
                <img src={item.icon} className='w-[50px]'/>
              </div>
            ))}
        </div>
    </div>
  )
}

export default IconList