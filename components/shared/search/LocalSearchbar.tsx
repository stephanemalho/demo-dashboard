"use client"
import { Input } from '@/components/ui/input'
import { CustomInputProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const LocalSearchbar = ({
    onChange,
    iconPosition,
    placeholder,
    otherClasses,
    searchValue,
} : CustomInputProps ) => {
  return (
    <div className={`relative z-20 flex h-[26px] items-center gap-2 px-4 ${otherClasses}`}>
        {iconPosition === 'right' && (
            <Image
                src="/assets/icons/search.svg"
                alt="search icon"
                width={10}
                height={10}
                className="absolute right-6 cursor-pointer"
            />
        )}
        <Input 
            placeholder={placeholder} 
            value={searchValue} // Utilisez la valeur de l'état de recherche
            onChange={(e) => onChange(e)} // Mettez à jour l'état de recherche lors de la modification
            className="no-focus h-[24px] rounded-none border-none font-thin shadow-none outline-none"
        />
    </div>
  )
}

export default LocalSearchbar