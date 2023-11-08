import Image from 'next/image'
import React from 'react'
import WrapIcon from './WrapIcon'

interface IconInfoProps {
  title?: string
}

const IconInfo = ({title}: IconInfoProps) => {
  return (

    <WrapIcon>
    <Image
      src="/assets/icons/information.svg"
      alt="info icon"
      width={20}
      height={20}
      title={title}
      className="m-auto flex cursor-help justify-center max-2xl:h-[16px] max-2xl:w-[16px]"
    />
    </WrapIcon>
  )
}

export default IconInfo