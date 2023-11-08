import Image from 'next/image'
import React from 'react'

interface IconInfoProps {
  title?: string
}

const IconInfo = ({title}: IconInfoProps) => {
  return (
    <Image
      src="/assets/icons/information.svg"
      alt="info icon"
      width={20}
      height={20}
      title={title}
      className="mr-2 flex cursor-help pb-1 max-2xl:h-[14px] max-2xl:w-[14px]"
    />
  )
}

export default IconInfo