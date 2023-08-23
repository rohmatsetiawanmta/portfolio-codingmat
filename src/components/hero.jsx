export default function Hero({ srcimg }) {
  return (
    <>
      <div
        className='bg-gradient-to-r from-blue-100 via-blue-100 to-purple-100 flex justify-center items-center px-20 pt-40 pb-60 m-0 h-auto max-md:px-12 max-lg:flex-col max-lg:justify-center '
        id='home'>
        <div className='max-lg:w-full flex justify-center items-center lg:hidden max-lg:pt-16 mb-16'>
          <img src={srcimg} alt='' className='w-[200px] rounded-full' />
        </div>

        <div className='w-2/5 max-lg:w-full'>
          <div className='text-3xl font-bold text-grey-900 text-left max-lg:pt-0'>Hello, I am</div>
          <div className='text-8xl font-bold text-blue-900 text-left leading-tight max-lg:pt-0 mb-4'>
            Rohmat <br />
            Setiawan.
          </div>
          <div className='h-[20px] w-[150px] bg-orange-500'></div>
          <div className='text-2xl font-medium text-gray-700 pt-8 pr-8 text-left leading-tight'>
            Based in Depok, Indonesia, I am a <span className='font-bold text-orange-600'>web developer</span> and{' '}
            <span className='font-bold text-orange-600'>educational content creator</span> in mathematics and web development.
          </div>
        </div>

        <div className='w-2/5 max-lg:hidden flex justify-center items-center'>
          <img src={srcimg} alt='' className='w-[400px] rounded-full' />
        </div>
      </div>
    </>
  );
}
