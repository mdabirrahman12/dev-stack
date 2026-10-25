import TechCard from './TechCard';

const allTech = ({allTech,stack,setStack}) => {
    // console.log(allTech);
    return (
        <div className='flex col-span-12 md:col-span-9 gap-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {allTech.map((tech) =>(
                    <TechCard key={tech.id}
                     setStack={setStack} 
                     stack={stack} 
                    tech={tech}/>

                ))}
            </div>
            <div className='  bg-white border border-gray-100 rounded-xl p-8 col-span-12 md:col-span-5'>
            <h1 className='text-2xl'>Your Stack</h1>
                <p className='text-gray-400 whitespace-nowrap py-4'>No technologies selected yet.</p>
                <button className='"bg-white border border-gray-100 rounded-xl p-3 text-gray-500'>Your stack is empty.</button>

            </div>
        </div>
    );
};

export default allTech;