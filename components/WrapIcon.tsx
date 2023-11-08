import React from 'react'

interface WrapIconProps {
  children: React.ReactNode
}

const WrapIcon = ({ children } : WrapIconProps) => {
  return (
    <div className="flex h-[30px] w-[30px] cursor-pointer items-center hover:bg-[#c9deff]">
      {children}
    </div>
  )
}

export default WrapIcon