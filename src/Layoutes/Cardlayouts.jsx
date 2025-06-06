import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Commonheading from '../component/Commonheading'
import Commonsubheading from '../component/commonsubheading'
import Button from '../component/Button'
import Cardlay from '../component/Cardlay'
import cardlayimg from '../assets/cardlayimg.png'
import cardlayimg1 from '../assets/cardlayimg1.png'
import cardlayimg2 from '../assets/cardlayimg2.png'
import cardlayimg3 from '../assets/cardlayimg3.png'
import cardlayimg4 from '../assets/cardlayimg4.png'





function Cardlayouts() {
  return (
    <section className='bg-[#F6F5FF] pt-[100px] pb-24'>
        <Container>
            <Flex className="gap-6 flex-wrap">
                <div className='h-[395px] w-[370px] pt-2'>
                  <Commonheading text="What We Do" />
                  <Commonsubheading className="pt-5 pb-14 leading-8" text="We are now a 
                  team of strategists, engineers, designers, and marketers who 
                  both use and develop technology."/>
                  <Button className="hover:text-black" text="Contact Us"/>
                </div>
                <Cardlay src={cardlayimg} title="web Design & Dev" text="Social 
                Media has changed the way we interact & do business while creating"/>
                <Cardlay src={cardlayimg1} title="Software Dev" text="Content Marketing is 
                the other fold of online advertisement. If you are looking to build"/>
                <Cardlay src={cardlayimg2} title="Content Writing" text="Social Media 
                has changed the way we interact & do business while creating a new avenue."/>
                <Cardlay src={cardlayimg3} title="Digital Marketing" text="Social Media 
                has changed the way we interact & do business while creating a new avenue"/>
                <Cardlay src={cardlayimg4} title="Support & Training" text="Content Marketing is 
                the other fold of online advertisement. If you are looking to build"/>
            </Flex>
        </Container>
    </section>
  )
}

export default Cardlayouts