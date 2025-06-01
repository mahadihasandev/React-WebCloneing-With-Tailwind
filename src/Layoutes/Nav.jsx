
import Container from './../component/Container';
import Flex from './../component/Flex';
import Image from './../component/Image';
import Logo from '../assets/Logo.png'
import List from './../component/List';
import Button from './../component/Button';
function Nav() {

 
  return (
    <>
  <nav className='bg-secondary py-[18px] absolute z-10 right-0 left-0'>
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
    </>
  )
}

export default Nav