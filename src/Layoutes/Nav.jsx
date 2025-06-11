
import Container from './../component/Container';
import Flex from './../component/Flex';
import Image from './../component/Image';
import Logo from '../assets/Logo.png'
import List from './../component/List';
import Button from './../component/Button';
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from 'react';

function Nav() {
  let [show,setShow]=useState(false)

  return (
    <>
  <nav className='hidden md:block bg-secondary py-[18px] absolute z-10 right-0 left-0'>
    <Container>
      <Flex className='items-center justify-between'>
        <Image src={Logo}/>
      <ul className='flex gap-x-10'>
        <List text="Home"/>
        <List text="About"/>
        <List text="Service"/>
        <List text="Portfolio"/>
        <List text="Price"/>
        <List text="Blog"/>
      </ul>
      <Button text="Contact Us"/>
      </Flex>
    </Container>
    </nav>


    <nav className='absolute z-10 left-0 right-0 px-4 py-4 bg-secondary md:hidden'>
      <Flex className="items-center justify-between">
        <div><Image className="w-[80%]" src={Logo}/></div>
        <div onClick={()=>setShow(!show)}><FaBarsStaggered className='text-white text-3xl'/></div>
      </Flex>
      {show && <ul className='mt-3 p-5 rounded-lg flex flex-col items-center justify-center gap-y-3 bg-[#140a6f]'>
        <List text="Home"/>
        <List text="About"/>
        <List text="Service"/>
        <List text="Portfolio"/>
        <List text="Price"/>
        <List text="Blog"/>
      </ul>}
    </nav>
    </>
  )
}

export default Nav