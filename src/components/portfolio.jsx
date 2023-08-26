import data from '../db/db.json';
import PortfolioCard from './portfolioCard';

export default function Portfolio() {
  // const portfolioCategories = data.portfolioCategories;
  const portfolioData = data.portfolioData;

  return (
    <>
      <div
        className='bg-gradient-to-r from-blue-200 via-blue-200 to-purple-200 flex flex-col justify-center items-center px-60 pt-40 pb-60 m-0 h-auto max-md:px-12 max-lg:flex-col max-lg:justify-center'
        id='portfolio'>
        <div className='text-6xl font-bold text-blue-900 text-right leading-tight max-lg:pt-0 mb-4'>Portfolio.</div>
        <div className='h-[20px] w-[150px] bg-orange-500'></div>
        <div className='pt-8 flex justify-center align-center gap-8 flex-wrap'>
          {portfolioData.map((val, idx) => {
            return <PortfolioCard data={val} key={idx} />;
          })}
        </div>
      </div>
    </>
  );
}
