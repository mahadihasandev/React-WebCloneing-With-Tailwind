
import Container from './../component/Container';
import Flex from './../component/Flex';
import Image from './../component/Image';
import serviceOne from '../assets/serviceOne.png'
import serviceTwo from '../assets/serviceTwo.png'
import serviceThree from '../assets/serviceThree.png'
import serviceFour from '../assets/serviceFour.png'


function Service() {
  return (
    <>
    <section className='bg-[#F9F9FB]'>
      <Container>
        <Flex className='justify-between relative -z-20'>
          <div className='absolute w-[270px] h-[350px] left-0 -top-[100px]'>
              <Image src={serviceOne}/>
          </div>
          <div className='absolute w-[200px] h-[496px] -top-[90px] left-[300px]'>
              <Image src={serviceTwo}/>
          </div>
          <div className='absolute w-[340px] h-[326px] -top-[15px] left-[530px]'>
              <Image src={serviceThree}/>
          </div>
          <div className='absolute w-[270px] h-[482px] -top-[28px] right-0'>
              <Image src={serviceFour}/>
          </div>

        </Flex>

      </Container>
    

    </section>
    </>
  )
}

export default Service