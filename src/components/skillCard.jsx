export default function SkillCard(props) {
  return (
    <>
      <div className='bg-gradient-to-l from-blue-200 to-blue-300 rounded-xl w-[600px] h-auto hover:scale-105 ease-in duration-300'>
        <div className='text-center pt-8 text-2xl font-bold'>{props.skillData.skillGroup}</div>
        <div className='p-8 flex flex-wrap justify-center align-center gap-4'>
          {props.skillData.skillName.map((val, idx) => {
            return (
              <p key={idx} className='border-2 border-blue-900 px-4 py-2 rounded-xl hover:bg-blue-900 hover:text-white ease-in duration-300'>
                {props.skillData.skillName[idx]}
              </p>
            );
          })}
        </div>
      </div>

      {/* 
      <p>
        
      </p> */}
    </>
  );
}
