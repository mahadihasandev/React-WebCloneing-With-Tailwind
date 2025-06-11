import React from 'react'
import Image from '../component/Image'

function PlanCard({className,title,money,ptext,src,className2}) {
  return (
    <div>
        <div className={`group bg-[#FFFFFF] hover:bg-[#6B62C5] relative 
        py-[60px] mx-[9px] md:px-[59px] flex flex-col text-center items-center
         justify-center rounded-[20px] w-[340px] md:w-[370px] md:h-[561px] duration-300 ${className}`}>
            <h3 className='group-hover:text-[#E6E5F3] text-third 
            text-[30px] font-bold font-open'>{title}</h3>
            <div className='w-[370px] h-[170px] absolute top-[124px] bg-[#ECEBF0] group-hover:bg-[#6001D3]'>
                <Image src={src} className={className2}/>
            </div>
            <h4 className='text-primary font-nunito font-extrabold 
            text-[48px] pb-3 pt-[216px]'>{money}</h4>
            <p className='group-hover:text-[#E6E5F3] text-[#726E9E] 
            font-paprika text-[18px] font-normal'>{ptext}</p>
          </div>
    </div>
  )
}

export default PlanCard