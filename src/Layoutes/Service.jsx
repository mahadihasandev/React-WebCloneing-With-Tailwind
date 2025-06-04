
import Container from './../component/Container';
import Flex from './../component/Flex';
import Image from './../component/Image';
import serviceOne from '../assets/serviceOne.png'
import serviceTwo from '../assets/serviceTwo.png'
import serviceThree from '../assets/serviceThree.png'
import serviceFour from '../assets/serviceFour.png'
import ServiceCard from './../component/ServiceCard';


function Service() {
  return (
    <>
    <section className='bg-[#F9F9FB] relative -z-20'>
      <Container>
        <Flex className='justify-between relative'>
          <div className='absolute w-[270px] h-[350px] left-0 -z-10 -top-[100px]'>
              <Image src={serviceOne}/>
          </div>
          <div className='absolute w-[200px] h-[496px] -top-[90px] -z-10 left-[300px]'>
              <Image src={serviceTwo}/>
          </div>
          <div className='absolute w-[340px] h-[326px] -top-[15px] -z-10 left-[530px]'>
              <Image src={serviceThree}/>
          </div>
          <div className='absolute w-[270px] h-[482px] -top-[28px] -z-10 right-0'>
              <Image src={serviceFour}/>
          </div>

        </Flex>
          <Flex className="justify-between mt-[500px]">
            <ServiceCard title="53k" text="Happy client"/>
            <ServiceCard title="10k" text="Projects Done"/>
            <ServiceCard title="120" text="Gets Award"/>
            <ServiceCard title="16" text="operated Years"/>
          </Flex>
      </Container>
    

    </section>
    </>
  )
}

export default Service