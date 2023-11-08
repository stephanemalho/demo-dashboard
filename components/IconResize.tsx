"use client";
import Image from 'next/image'
import React from 'react'

const IconResize = () => {
  const handleScreenResize = () => {
    const elem = document.querySelector('.slide-in-right');
    if (elem) {
      if (elem.classList.contains('w-[70vw]')) {
        elem.classList.remove('w-[70vw]');
        elem.classList.add('w-full');
      } else {
        elem.classList.remove('w-full');
        elem.classList.add('w-[70vw]');
      }
    }
  }

  return (
    <Image
      src="/assets/icons/screen.svg"
      alt="Resize"
      width={16}
      height={16}
      className={`ml-auto block cursor-pointer max-2xl:hidden`}
      onClick={handleScreenResize}
    />
  )
}

export default IconResize;