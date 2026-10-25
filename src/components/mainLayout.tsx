import { use, useState } from "react";
import AllTech from "./allTech";
const mainLayout = ({dataPromise}) => {

    const allTech = use(dataPromise);
        const[stack,setStack] = useState([]);
        // console.log(Stack)
    return (
        <div className="container mx-auto">
            <h1 className="px-5 p-3 text-4xl">Explore the  <span className="text-fuchsia-600">Technologies</span></h1>
           <p className="px-5 p-3 text-shadow-gray-500"> Pick one technology per category to build your ideal stack.</p>
           <AllTech
            setStack={setStack} 
           stack={stack}
            allTech ={allTech}
           />
        </div>
    );
};

export default mainLayout;