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
      width={10}
      height={10}
      title={title}
      className="ml-auto flex cursor-help pb-1"
    />
  )
}

export default IconInfo