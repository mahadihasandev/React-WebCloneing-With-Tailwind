import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Commonheading from '../component/Commonheading'
import Commonsubheading from "../component/commonsubheading"
import Button from '../component/Button'
import FeatureToggle from '../component/FeatureToggle'


function Feature() {
  return (
    <section className='bg-five py-24'>
    <Container>
        <Flex>
            <div className='w-1/2'>
            <FeatureToggle className="py-[42px] bg-white" text="We solve real-world 
            problems through people and the web."/>
            <FeatureToggle text="We make processes and 
            technology work efficiently together."/>
            <FeatureToggle text="We advance improve existing 
            technology through research and development."/>
            <FeatureToggle text="We develop long-lasting and 
            scalable solutions, relationships partnerships."/>
            
            </div>
            <div className='w-1/2 pl-[100px]'>
            <Commonheading text="Why Choose Us"/>
            <Commonsubheading className="w-[393px] pt-3 pb-10" text="We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs."/>
            <Button text="Contact Us"/>
            </div>
        </Flex>
    </Container>
    </section>
  )
}

export default Feature