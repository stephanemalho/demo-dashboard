import React from 'react'

interface WrapIconProps {
  children: React.ReactNode
  bgColorHover: string
}

const WrapIcon = ({ children, bgColorHover } : WrapIconProps) => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className={`${bgColorHover} flex h-[30px] w-[30px] cursor-pointer items-center`}>
      {children}
    </div>
  )
}

export default WrapIcon