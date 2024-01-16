import React from 'react'

interface DiffLineInfoProps {
  numberOfModifiedLines: number
}

const DiffLineInfo = ({numberOfModifiedLines} : DiffLineInfoProps) => {
  return (
    <div className="sticky top-0 z-10 flex w-full flex-row bg-[#fff] pr-1 shadow-sm max-2xl:text-[10px]">
        <div className="flex w-[120px] justify-between pt-1">
        <div className="h-[20px] w-[20px] bg-[#FFBDC5]"/>
        <span>Old</span>
        <div className="h-[20px] w-[20px] bg-[#6FDC8C]"/>
        <span>New</span>
        </div>
        <div className="ml-auto pl-[40px] text-[#434343]">
          modified lines: {numberOfModifiedLines}
        </div>
      </div>
  )
}

export default DiffLineInfo