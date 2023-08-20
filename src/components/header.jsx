import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='bg-blue-900 flex justify-between items-center px-20 py-4 max-md:px-12 m-0 '>
        <div className='text-white text-3xl font-bold py-2'>
          #<span className='text-orange-400'>Coding</span>Mat
        </div>
        <nav className='text-white gap-1 text-lg font-medium flex justify-center items-center max-sm:hidden'>
          <div className='px-3 py-2 hover:bg-blue-200 hover:text-blue-900 cursor-pointer'>Home</div>
          <div className='px-3 py-2 hover:bg-blue-200 hover:text-blue-900 cursor-pointer'>About</div>
          <div className='px-3 py-2 hover:bg-blue-200 hover:text-blue-900 cursor-pointer'>Skill</div>
          <div className='px-3 py-2 hover:bg-blue-200 hover:text-blue-900 cursor-pointer'>Portfolio</div>
          <div className='px-3 py-2 hover:bg-blue-200 hover:text-blue-900 cursor-pointer'>Contact</div>
        </nav>
        <nav className='text-white gap-1 text-lg font-medium sm:hidden'>
          <span className='material-symbols-outlined cursor-pointer' onClick={() => setOpen(!open)}>
            {open ? 'close' : 'menu'}
          </span>
        </nav>
      </div>
      {open ? (
        <>
          <div className='absolute w-full flex flex-col justify-center items-center bg-blue-900 text-white sm:hidden py-4'>
            <div className='px-3 py-2 text-center hover:bg-blue-200 hover:text-blue-900 cursor-pointer' onClick={() => setOpen(!open)}>
              Home
            </div>
            <div className='px-3 py-2 text-center hover:bg-blue-200 hover:text-blue-900 cursor-pointer' onClick={() => setOpen(!open)}>
              About
            </div>
            <div className='px-3 py-2 text-center hover:bg-blue-200 hover:text-blue-900 cursor-pointer' onClick={() => setOpen(!open)}>
              Skill
            </div>
            <div className='px-3 py-2 text-center hover:bg-blue-200 hover:text-blue-900 cursor-pointer' onClick={() => setOpen(!open)}>
              Portfolio
            </div>
            <div className='px-3 py-2 text-center hover:bg-blue-200 hover:text-blue-900 cursor-pointer' onClick={() => setOpen(!open)}>
              Contact
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
