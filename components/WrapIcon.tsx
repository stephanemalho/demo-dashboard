import { WrapIconProps } from '@/types'
import React from 'react'

const WrapIcon = ({ children, bgColorHover } : WrapIconProps) => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className={`${bgColorHover} flex h-[24px] w-[24px] cursor-pointer items-center`}>
      {children}
    </div>
  )
}

export default WrapIcon