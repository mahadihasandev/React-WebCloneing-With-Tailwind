import React from 'react'

function ServiceCard({title,text}) {
  return (
    <div className='text-center relative after:absolute after:bg-fifth after:h-[150px] after:w-[2px] after:contents[""] after:top-0 after:right-12 md:after:-right-7 after:rounded-md after:bg-slate-600'>
        <h1 className='text-primary font-extrabold text-[64px] font-open'>{title}</h1>
        <p className='text-third font-open font-bold text-3xl pt-6'>{text}</p>
    </div>
  )
}

export default ServiceCard