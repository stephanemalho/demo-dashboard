import Image from 'next/image'
import React from 'react'

const MinusIcon = () => {
  return (
    <span
    className="relative flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[#f7a8a8] p-2 text-center"
  >
    <Image
      className="absolute"
      src="/assets/icons/subtract.svg"
      alt="subtract"
      width={10}
      height={10}
    />
  </span>
  )
}

export default MinusIcon