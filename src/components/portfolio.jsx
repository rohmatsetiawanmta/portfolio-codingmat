import { useState } from 'react';
import data from '../db/db.json';
import PortfolioCard from './portfolioCard';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const portfolioCategories = data.portfolioCategories;
  const portfolioData = data.portfolioData;

  return (
    <>
      <div
        className='bg-gradient-to-r from-blue-200 via-blue-200 to-purple-200 flex flex-col justify-center items-center px-60 pt-40 pb-60 m-0 h-auto max-md:px-12 max-lg:flex-col max-lg:justify-center'
        id='portfolio'>
        <div className='text-6xl font-bold text-blue-900 text-right leading-tight max-lg:pt-0 mb-4'>Portfolio.</div>
        <div className='h-[20px] w-[150px] bg-orange-500'></div>
        <div className='flex justify-center items-center gap-3 pt-8'>
          <div
            className={`border-2 border-blue-900 px-3 py-2 font-medium text-xl rounded-xl cursor-pointer ${
              filter === 'All' ? 'bg-blue-900 text-white' : ''
            }`}
            onClick={() => setFilter('All')}>
            All
          </div>
          {portfolioCategories.map((val, idx) => {
            return (
              <div
                key={idx}
                className={`border-2 border-blue-900 px-3 py-2 font-medium text-xl rounded-xl cursor-pointer ${
                  filter === val ? 'bg-blue-900 text-white' : ''
                }`}
                onClick={() => setFilter(val)}>
                {val}
                {console.log(filter)}
              </div>
            );
          })}
        </div>
        <div className='py-8 mt-8 px-8 flex justify-center items-start gap-8 flex-wrap h-[1000px] overflow-y-scroll'>
          {filter === 'All'
            ? portfolioData.map((val, idx) => {
                return <PortfolioCard data={val} key={idx} />;
              })
            : portfolioData
                .filter((val) => val.category === filter)
                .map((val, idx) => {
                  return <PortfolioCard data={val} key={idx} />;
                })}
        </div>
      </div>
    </>
  );
}
