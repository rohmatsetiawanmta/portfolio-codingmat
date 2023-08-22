import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='fixed'>
        <div className='w-screen bg-gradient-to-r from-orange-700 to-orange-400 flex justify-between items-center px-20 max-md:px-12 m-0'>
          <a href='/'>
            <div className='text-white text-3xl font-bold py-6 max-sm:text-2xl'>
              #<span className='text-orange-300'>Coding</span>Mat
            </div>
          </a>
          <nav className='text-white gap-1 text-lg font-medium flex justify-center items-center max-sm:hidden m-0'>
            <a href='#home'>
              <div className='px-3 py-7 hover:bg-orange-200 hover:text-orange-900 cursor-pointer'>Home</div>
            </a>
            <a href='#about'>
              <div className='px-3 py-7 hover:bg-orange-200 hover:text-orange-900 cursor-pointer'>About</div>
            </a>
            <a href='#skill'>
              <div className='px-3 py-7 hover:bg-orange-200 hover:text-orange-900 cursor-pointer'>Skill</div>
            </a>
            <a href='#portfolio'>
              <div className='px-3 py-7 hover:bg-orange-200 hover:text-orange-900 cursor-pointer'>Portfolio</div>
            </a>
            <a href='#contact'>
              <div className='px-3 py-7 hover:bg-orange-200 hover:text-orange-900 cursor-pointer lg:hidden'>Contact</div>
            </a>
          </nav>
          <a href='#contact' className='max-lg:hidden'>
            <div className='text-lg font-medium rounded-full px-5 py-2 bg-orange-300 font-bold text-orange-900 cursor-pointer border-2 border-orange-300 hover:border-white hover:text-white hover:bg-transparent'>
              Contact Me
            </div>
          </a>
          <nav className='text-white gap-1 text-lg font-medium sm:hidden'>
            <span className='material-symbols-outlined cursor-pointer' onClick={() => setOpen(!open)}>
              {open ? 'close' : 'menu'}
            </span>
          </nav>
        </div>
        {open ? (
          <>
            <div className='absolute w-screen flex flex-col justify-center items-center bg-gradient-to-r from-orange-700 to-orange-400 text-white sm:hidden py-4'>
              <div
                className='px-3 py-2 text-center w-full hover:font-bold hover:bg-orange-200 hover:text-orange-900 cursor-pointer'
                onClick={() => setOpen(!open)}>
                Home
              </div>
              <div
                className='px-3 py-2 text-center w-full hover:font-bold hover:bg-orange-200 hover:text-orange-900 cursor-pointer'
                onClick={() => setOpen(!open)}>
                About
              </div>
              <div
                className='px-3 py-2 text-center w-full hover:font-bold hover:bg-orange-200 hover:text-orange-900 cursor-pointer'
                onClick={() => setOpen(!open)}>
                Skill
              </div>
              <div
                className='px-3 py-2 text-center w-full hover:font-bold hover:bg-orange-200 hover:text-orange-900 cursor-pointer'
                onClick={() => setOpen(!open)}>
                Portfolio
              </div>
              <div
                className='px-3 py-2 text-center w-full hover:font-bold hover:bg-orange-200 hover:text-orange-900 cursor-pointer'
                onClick={() => setOpen(!open)}>
                Contact
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
