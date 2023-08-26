import { useState } from 'react';

export default function PortfolioCard(props) {
  const [more, setMore] = useState(false);
  return (
    <>
      <div className='bg-gradient-to-l from-blue-400 to-blue-300 rounded-xl w-[600px] h-auto hover:scale-105 ease-in duration-300'>
        <div className='relative flex flex-col justify-center items-center gap-2 p-4'>
          <div className='absolute top-8 left-8 bg-gradient-to-r from-blue-800 via-blue-800 to-purple-800 rounded-xl px-3 py-1 text-gray-200 font-medium'>
            {props.data.category}
          </div>
          <img src={props.data.image} alt='' className='w-full h-[337px] object-cover rounded-xl' />
          <div className='text-center text-xl font-bold mt-4'>{props.data.name}</div>
          <div className='text-center text-md font-medium text-justify'>{props.data.description}</div>
          {more ? (
            <>
              <div className='text-center text-lg font-bold text-justify mt-4'>Tech Stack(s) and Skill(s):</div>
              <div className='flex flex-wrap justify-center items-center gap-2'>
                {props.data.techStack.map((val, idx) => {
                  return (
                    <p
                      key={idx}
                      className='text-sm border-2 border-blue-900 px-2 py-1 rounded-xl hover:bg-blue-900 hover:text-white ease-in duration-300'>
                      {props.data.techStack[idx]}
                    </p>
                  );
                })}
              </div>
              <div className='flex flex-wrap justify-center items-center gap-2 pt-4'>
                {props.data.linkIcon.map((val, idx) => {
                  return (
                    <a href={props.data.linkURL[idx]} key={idx} target='_blank' rel='noreferrer'>
                      <p className='text-2xl border-2 border-blue-900 px-2 py-2 rounded-full flex hover:bg-blue-900 hover:text-white ease-in duration-300'>
                        <i className={props.data.linkIcon[idx]}></i>
                      </p>
                    </a>
                  );
                })}
              </div>
            </>
          ) : (
            <div className='flex justify-center items-center cursor-pointer' onClick={() => setMore(!more)}>
              <div className='text-md text-center border-2 border-blue-900 bg-blue-900 text-white w-20 px-2 py-1 rounded-xl font-medium hover:bg-transparent hover:text-blue-900 ease-in duration-300'>
                More...
              </div>
            </div>
          )}
          {/* {props.skillData.skillName.map((val, idx) => {
            return (
              <p key={idx} className='border-2 border-blue-900 px-4 py-2 rounded-xl hover:bg-blue-900 hover:text-white ease-in duration-300'>
                {props.skillData.skillName[idx]}
              </p>
            );
          })} */}
        </div>
      </div>

      {/* 
        <p>
          
        </p> */}
    </>
  );
}
