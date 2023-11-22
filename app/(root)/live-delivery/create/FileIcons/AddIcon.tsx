
import { IconProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const AddIcon = ({handleDeleteElement} : IconProps ) => {
  return (
    <span
    onClick={handleDeleteElement}
    className="relative flex h-[14px] w-[14px] cursor-pointer items-center justify-center rounded-full bg-[#89dcc0] p-2 text-center"
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