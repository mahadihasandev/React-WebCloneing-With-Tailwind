import React from 'react'

function commonsubheading({text,className}) {
  return (
    <div className={`text-four text-[16px] md:text-lg font-normal font-paprika ${className}`}>{text}</div>
  )
}

export default commonsubheading