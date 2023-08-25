export default function About() {
  return (
    <>
      <div
        className='bg-gradient-to-r from-blue-200 via-blue-200 to-purple-200 flex flex-col justify-center items-center px-60 pt-20 pb-60 m-0 h-auto max-md:px-12 max-lg:flex-col max-lg:justify-center'
        id='about'>
        <div className='text-6xl font-bold text-blue-900 text-right leading-tight max-lg:pt-0 mb-4'>About Me.</div>
        <div className='h-[20px] w-[150px] bg-orange-500'></div>
        <div className='text-2xl font-medium text-gray-700 pt-8  text-justify leading-normal'>
          <span className='text-4xl font-bold'> Hello...</span>
          <br />
          <br />I am a mathematics graduate with a passion for web development and a strong desire to explore new opportunities in this field. Through
          bootcamp and hands-on experience, I have become proficient in HTML, CSS, JavaScript, mySQL, and popular frameworks like React, Node,
          Tailwind, and Chakra. With a solid foundation in logical thinking and problem-solving skills from my mathematical background, I am confident
          in my ability to contribute to web development. I am excited to connect with like-minded individuals and organizations for potential
          collaborations and to further expand my skills in web development.
        </div>
      </div>
    </>
  );
}
