import Image from '../component/Image'


function Cardlay({src,title,text}) {
  return (
    <div className='group bg-[#FFFFFF] w-[370px] h-[395px] rounded-[20px] 
    text-center px-7 hover:bg-darkBlue duration-300'>
      <Image className='inline-block pt-12 pb-8' src={src}/>
      
      <h3 className='group-hover:text-seven text-[30px] font-bold 
      text-third pb-4'>{title}</h3>
      <p className='group-hover:text-[#E6E5F3] text-[#726E9E] 
      duration-300 font-paprika w-[278px] h-[120px] text-center pl-6 
      text-[18px] font-normal'>{text}</p>
      <a className='group-hover:after:bg-[#e6e5f344] group-hover:text-[#F4F4F5] 
      font-open font-bold text-lg pt-[7px] text-third relative after:absolute after:top-0
      after:-right-3 after:contents-[""] after:w-[30px] after:h-[40px] after:bg-[#19bf0095] 
      after:rounded-r-full hover:after:w-[120px] 
      hover:after:rounded-l-full duration-1000' href="">Read More</a>
    </div>
  )
}

export default Cardlay