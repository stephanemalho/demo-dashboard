
import Image from 'next/image'
import React from 'react'

const AddIcon = () => {
  return (
    <span
    className="relative flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[rgba(111,220,140,0.8)] p-2 text-center"
  >
    <Image
      className="absolute"
      src="/assets/icons/add.svg"
      alt="add"
      width={10}
      height={10}
    />
  </span>
  )
}

export default AddIcon