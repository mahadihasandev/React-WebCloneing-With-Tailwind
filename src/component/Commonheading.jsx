import React from 'react'

function Commonheading({text,className}) {
  return (
    <div className={`text-third text-[30px] md:text-5xl font-open font-bold ${className}`}>{text}</div>
  )
}

export default Commonheading