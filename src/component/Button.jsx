import React from 'react'

function Button({text,className}) {
  return (
    <button className={`md:text-lg font-semibold 
        text-white border border-transparent py-[14px] px-7 
        rounded-full bg-primary hover:bg-transparent 
        hover:border-primary duration-300 ${className}`}>{text}</button>
  );
};

export default Button;