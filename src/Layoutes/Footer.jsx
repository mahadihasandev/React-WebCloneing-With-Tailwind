import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import Logo from '../assets/Logo.png'
import Commonsubheading from '../component/commonsubheading'
import List from '../component/List'

function Footer() {
  return (
    <footer className='bg-[#48409C] pt-[30px] md:pt-[140px]'>
        <Container>
            <Flex className="flex-col md:flex-row">
            <div className='w-2/5 pl-4 md:pl-0'>
                <div className='w-[135px] h-[73px]'>
                    <Image src={Logo}/>
                    
                </div>
                <div className='w-[330px] md:w-[449px] text-seven font-nunito text-[18px] font-normal md:pb-[273px]'>Install any demo or template with a single click.
                         You can mix and match all the demos & templates.
                          Every demo can be turned into one or multi-page.</div>
                
            </div>
            <div className='md:w-1/5 pt-5 md:pt-0 pb-5 pl-[30px] md:pl-[70px]'>
            <div className='text-[#FEFEFE] text-[24px] font-semibold font-open pb-6 md:pb-12'>Feature</div>
                <ul className='flex flex-wrap md:flex-nowrap md:flex-col gap-6 md:gap-[33px]'>
                    <List className="hover:text-seven font-nunito text-[18px] font-normal text-seven" text="Home"/>
                    <List className="hover:text-seven font-nunito text-[18px] font-normal text-seven" text="About"/>
                    <List className="hover:text-seven font-nunito text-[18px] font-normal text-seven" text="Benefit"/>
                    <List className="hover:text-seven font-nunito text-[18px] font-normal text-seven" text="Pricing"/>
                    <List className="hover:text-seven font-nunito text-[18px] font-normal text-seven" text="Blog"/>
                </ul>
            </div>
            <div className='md:w-1/5 pl-[30px] md:pl-[70px] md:pb-[188px]'>
            <div className='text-[#FEFEFE] text-[24px] font-semibold font-open pb-5 md:pb-12'>Product</div>
                <ul className='flex md:flex-col gap-[33px]'>
                    <List className="hover:text-seven font-nunito text-[18px] font-normal text-seven" text="Home"/>
                    <List className="hover:text-seven font-nunito text-[18px] font-normal text-seven" text="About"/>
                    <List className="hover:text-seven font-nunito text-[18px] font-normal text-seven" text="Benefit"/>
                    </ul>
                
            </div>
            <div className='md:w-1/5 pl-[30px] md:pl-[70px] pb-5 md:pb-0'>
            <div className='text-[#FEFEFE] text-[24px] font-semibold font-open pt-5 pb-5 md:pb-12'>Support</div>
                <ul className='flex md:flex-col gap-[33px]'>
                    <List className="hover:text-seven font-nunito text-[18px] font-normal text-seven" text="Home"/>
                    <List className="hover:text-seven font-nunito text-[18px] font-normal text-seven" text="About"/>
                    <List className="hover:text-seven font-nunito text-[18px] font-normal text-seven" text="Benefit"/>
                     </ul>
                
            </div>
            </Flex>
            <Flex className="!block md:!flex pl-7">
                <div className='text-seven'>@20201 Innovate.All rights reserved.</div>
                <div className='font-nunito font-normal 
                text-[18px] text-seven md:pl-[535px] pt-5 md:pt-0'>Privacy policy</div>
                <div className='font-nunito text-[18px] text-seven md:pl-[60px] pb-8'>Terms & condition</div>
            </Flex>
        </Container>
    </footer>
  )
}

export default Footer