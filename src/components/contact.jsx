import data from '../db/db.json';

export default function Contact() {
  const contact = data.contact;
  return (
    <>
      <div
        className='bg-gradient-to-r from-blue-100 via-blue-100 to-purple-100 flex flex-col justify-center items-center px-60 pt-40 pb-60 m-0 h-auto max-md:px-12 max-lg:flex-col max-lg:justify-center'
        id='contact'>
        <div className='text-6xl font-bold text-blue-900 text-center leading-tight max-lg:pt-0 mb-4'>Contact Me.</div>
        <div className='h-[20px] w-[150px] bg-orange-500'></div>
        <div>
          {contact.map((val, idx) => {
            return (
              <div key={idx}>
                <a
                  href={val.link}
                  className='flex justify-start items-center gap-8 mt-8 px-6 py-2 bg-transparent rounded-xl hover:bg-gradient-to-r hover:from-blue-300 hover:via-blue-300 hover:to-purple-300'>
                  <img src={val.logo} alt={val.display} className='w-[75px] h-[75px]' />
                  <div className='font-medium text-2xl'>{val.display}</div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
