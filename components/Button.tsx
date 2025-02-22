import React from 'react'

const Button = ({ children }: { children: React.ReactNode}) => {
  return (
    <button className='px-5 py-3 bg-[#1E1E1E] text-[#F6F6F6] text-base font-medium font-inter rounded-lg'>{ children }</button>
  )
}

export default Button