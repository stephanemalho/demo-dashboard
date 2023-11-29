"use client";
import WrapIcon from '@/components/WrapIcon';
import { menuItems } from '@/data/dashboard';
import Image from 'next/image';
import React, { useState } from 'react';
import RenderMenu from '../RenderMenu';

const RenderContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={` flex h-full max-h-[92vh] flex-row justify-between overflow-y-hidden bg-[#f2f2f2] transition-all duration-500 ease-in-out ${isOpen ? "w-[16vw]" : "w-[50px]"}`}>
      <div className={`m-2 flex flex-col text-[10px] transition-all duration-500 ease-in-out ${isOpen ? 'w-[16vw]' : 'w-[50px]'} absolute`}>
        <WrapIcon bgColorHover='hover:bg-[#fff]'>
        <button onClick={handleOpen} className="m-1  h-full w-full max-w-[20px]">
          <Image src="/assets/icons/data--base.svg" alt="arrow" width={20} height={20} />
        </button> 
        </WrapIcon>
      </div>
      {isOpen && (
        <div className={`mt-[50px] flex h-auto overflow-y-auto ${isOpen ? "w-[20vw]": "w-[0vw]"} flex-col text-[10px] transition-all duration-500 ease-in-out`}>
          {menuItems.map((item) => (
            <RenderMenu key={item.title}
              item={item}
              level={1}
            />
          ))}
        </div>
        )}
    </div>
  );
};

export default RenderContainer;
