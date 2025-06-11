
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
    <section className='bg-[#F9F9FB] relative -z-20 pb-[50px] md:pb-[100px]'>
      <Container>
        <Flex className='justify-between relative pb-[900px] md:pb-0'>
          <div className='absolute w-[600px] h-[10px] md:w-[270px] md:h-[350px] left-[50px] md:left-0 -z-10 top-11 md:-top-[100px]'>
              <Image src={serviceOne}/>
          </div>
          <div className='absolute w-[600px] h-[10px] md:w-[200px] md:h-[496px] top-[430px] md:-top-[90px] -z-10 left-20 md:left-[300px]'>
              <Image src={serviceTwo}/>
          </div>
          <div className='absolute w-[600px] h-[40px] md:w-[340px] md:h-[326px] top-[965px] md:-top-[15px] -z-10 left-2 md:left-[530px]'>
              <Image src={serviceThree}/>
          </div>
          <div className='absolute w-[600px] h-[10px] md:w-[270px] md:h-[482px] top-[1335px] md:left-[900px] left-12 md:-top-[28px] -z-10 '>
              <Image src={serviceFour}/>
          </div>

        </Flex>
          <Flex className="flex-col md:flex-row justify-between mt-[1000px] md:mt-[500px]">
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