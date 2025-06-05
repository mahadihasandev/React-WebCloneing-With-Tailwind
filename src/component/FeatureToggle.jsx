import React from 'react'
import Flex from './Flex'

function FeatureToggle({text,className}) {
  return (
    <>
    <Flex className={`gap-x-9 rounded-lg ${className}`}>
        <div className='relative mr-5 mt-1'> 
            <div className='absolute bg-primary top-0 left-0 rounded-full w-[25px] h-[25px]'></div>
            <div className='absolute bg-six top-0 left-[15px] rounded-full w-[25px] h-[25px]'></div>
            
        </div>
        <div className='w-[366px] text-lg text-four font-normal font-paprika'>{text}</div>
    </Flex>
    </>
  )
}

export default FeatureToggle