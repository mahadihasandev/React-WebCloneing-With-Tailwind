
import Button from './../component/Button';
import Container from './../component/Container';
import Flex from './../component/Flex';
function Banner() {
  return (
    <>
    <section className='bg-banner relative bg-no-repeat bg-cover bg-center pt-[500px] pb-[394px] w-full'>
      <div className='absolute bg-[#6b62c5e6] w-full top-0 left-0'>
        <Container>
        <div className='text-center mt-[246px] mb-[254px]'>
          <h1 className='text-[84px] text-[#FAFAFE] font-bold font-open'>You're Unique.Your Website Should be too</h1>
          <p className='w-[715px] leading-10 mx-auto font-normal font-paprika text-[#E6E5F3] text-2xl mb-6'>A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business.</p>
          <Flex className='gap-x-5 justify-center'>
          <Button text='Get free quoto'/>
          <Button text='Learn More'/>
          </Flex>
        </div>
        </Container>
      </div>
    </section>
    </>
  )
}

export default Banner