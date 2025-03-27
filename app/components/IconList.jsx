import React from 'react'

const IconList = ({title, items}) => {
  return (
    <div>
        <span className='text-zinc-300 text-[20px] block mb-2'>{title}</span>
        <div className='flex gap-3 items-center text-zinc-300'>
            {items.map((item, index) => (
                <item.icon key={index} size={25}/>
            ))}
        </div>
    </div>
  )
}

export default IconList