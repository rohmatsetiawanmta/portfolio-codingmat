import SkillCard from './skillCard';
import TechStackCard from './techStackCard';
import data from '../db/db.json';

export default function Skill() {
  const skillSet = data.skillSet;
  const techStacks = data.techStack;

  return (
    <>
      <div
        className='bg-gradient-to-r from-blue-100 via-blue-100 to-purple-100 flex flex-col justify-center items-center px-60 pt-40 pb-60 m-0 h-auto max-md:px-12 max-lg:flex-col max-lg:justify-center'
        id='skill'>
        <div className='text-6xl font-bold text-blue-900 text-right leading-tight max-lg:pt-0 mb-4'>My Skills.</div>
        <div className='h-[20px] w-[150px] bg-orange-500'></div>
        <div className='pt-8 flex justify-center align-center gap-8 flex-wrap'>
          {skillSet.map((val, idx) => {
            return <SkillCard skillData={val} key={idx} />;
          })}
        </div>
        <div className='text-6xl font-bold text-blue-900 text-right leading-tight mt-20 mb-4'>Tech Stacks.</div>
        <div className='h-[20px] w-[150px] bg-orange-500'></div>
        <div className='pt-8 flex justify-center align-center gap-6 flex-wrap'>
          {techStacks.map((val, idx) => {
            return <TechStackCard data={val} key={idx} />;
          })}
        </div>
      </div>
    </>
  );
}
