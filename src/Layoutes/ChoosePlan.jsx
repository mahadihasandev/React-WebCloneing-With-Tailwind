import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import PlanCard from '../component/PlanCard'
import planimg1 from '../assets/planimg1.png'
import planimg2 from '../assets/planimg2.png'
import planimg3 from '../assets/planimg3.png'

function ChoosePlan() {
  return (
    <section className='py-[100px] bg-[#F9F9FB]'>
        <Container>
            <Flex className="gap-6 md:gap-[3px] flex-wrap">
                <PlanCard title="Basic" className2='pl-[100px] pt-[20px]' src={planimg1} money="$160" ptext=" Responsive Design 
                Dynamic Elements Service Pages Custom Design & Features"/>
                <PlanCard title="Professional" src={planimg2} money="$240" ptext=" Responsive Design
 Dynamic Elements
 Service Pages
 Custom Design & Features"/>
                <PlanCard title="Exclusivec" src={planimg3} money="$325" ptext=" Responsive Design
 Dynamic Elements
 Service Pages
 Custom Design & Features"/>
                
                
            </Flex>
        </Container>
        
    </section>
  )
}

export default ChoosePlan