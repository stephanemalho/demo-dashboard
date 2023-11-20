import Image from 'next/image'
import React from 'react'
import WrapIcon from './WrapIcon'

interface IconInfoProps {
  title?: string
}

const IconInfo = ({title}: IconInfoProps) => {
  return (

    <WrapIcon bgColorHover='hover:bg-[#90d7da]'>
    <Image
      src="/assets/icons/information.svg"
      alt="info icon"
      width={16}
      height={16}
      title={title}
      className="m-auto flex cursor-help justify-center fill-[#0043ce] max-2xl:h-[14px] max-2xl:w-[14px]"
    />
    </WrapIcon>
  )
}

export default IconInfo