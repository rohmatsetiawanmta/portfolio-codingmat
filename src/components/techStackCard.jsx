export default function TechStackCard(props) {
  return (
    <>
      <div>
        <div className='rounded-xl w-[100px] h-[100px] hover:scale-110 ease-in duration-300 flex justify-center items-center'>
          <img src={props.data.techImage} alt={props.data.techName} />
        </div>
        <p className='text-center py-2 font-medium'>{props.data.techName}</p>
      </div>
    </>
  );
}
