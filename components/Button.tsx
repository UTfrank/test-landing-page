import React from 'react'

interface ButtonProps {
  children: React.ReactNode,
  variant?: string
}

const Button = ({ children, variant }: ButtonProps) => {
  return (
    <button className={`px-5 py-3 text-base font-medium font-inter rounded-lg ${variant === "bold" ? "bg-[#1E1E1E] text-[#F6F6F6]" : "border border-[#533D3D] text-[#343434]"}`}>{ children }</button>
  )
}

export default Button