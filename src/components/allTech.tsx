import React from 'react';
import TechCard from './TechCard';

const allTech = ({allTech}) => {
    console.log(allTech);
    return (
        <div className='flex col-span-12 md:col-span-9'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {allTech.map((tech) =>(
                    <TechCard key={tech.id} tech={tech}/>

                ))}
            </div>
            <div className='col-span-12 md:col-span-3'>TechList</div>
        </div>
    );
};

export default allTech;