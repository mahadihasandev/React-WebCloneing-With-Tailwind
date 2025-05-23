import React from 'react'

function List({text,className}) {
  return (
    <li className={`font-open text-white list-none 
      font-semibold text-lg hover:text-[#1BBF00] 
      hover:cursor-pointer duration-400 ${className}`}>{text}</li>
  )
}

export default List