import React from 'react'
import { equipments } from '../data/aboutData'

const Equipments = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {equipments.map((equipment, index) => (
            <div key={index} className='flex flex-col items-center backdrop-blur-sm border border-white/10 rounded-lg hover:shadow-2xl duration-300 hover:border-indigo-200 p-4'>
                <img src={equipment.src} alt={equipment.name} className='w-[200px]'/>
                <div className='text-indigo-200 text-[15px] md:text-md'>{equipment.name}</div>
            </div>
        ))}
    </div>
  )
}

export default Equipments