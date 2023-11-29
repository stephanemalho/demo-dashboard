"use client"
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

interface CustomInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  route?: string;
  iconPosition: string;
  placeholder: string;
  otherClasses?: string;
  searchValue: string; // Nouveau
  setSearchValue: React.Dispatch<React.SetStateAction<string>>; // Nouveau
}

const LocalSearchbar = ({
    onChange,
    iconPosition,
    placeholder,
    otherClasses,
    searchValue, // Nouveau
    setSearchValue // Nouveau
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
            onChange={(e) => setSearchValue(e.target.value)} // Mettez à jour l'état de recherche lors de la modification
            className="no-focus h-[24px] rounded-none border-none font-thin shadow-none outline-none"
        />
    </div>
  )
}

export default LocalSearchbar