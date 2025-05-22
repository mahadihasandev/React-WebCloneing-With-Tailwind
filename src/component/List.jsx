import React from 'react'

function List({text}) {
  return (
    <li className='font-open text-white list-none font-semibold text-[18px] hover:text-[#1BBF00] duration-400'>{text}</li>
  )
}

export default List