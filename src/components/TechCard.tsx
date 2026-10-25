import toast from "react-hot-toast";

const TechCard = ({tech,stack,setStack}) => {
  const isAlreadyAdded = stack.some((item) => item.id === tech.id);
  const handleAddToStack = () =>{
    if ( isAlreadyAdded) return toast.error("Already added");
    setStack((previousStack) => [...previousStack, tech,]);
    toast.success("Technology added!")
  }
  return (
    <div 
    onClick={handleAddToStack}
    className={`bg-white border border-gray-100 rounded-xl p-3 ${isAlreadyAdded ? "cursor-not-allowed" : "cursor-pointer"}`}>
      {/* Icon and Badge */}
      <div className="flex justify-between items-center">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-5 h-5"
        />

        <span className="bg-blue-50 text-blue-500 rounded-full px-2 py-1 text-[9px]">
          {tech.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold mt-1">
        {tech.name}
      </h2>

      {/* Description */}
      <p className="text-[14px] text-gray-500 mt-1 leading-4">
        {tech.description}
      </p>

      {/* Details */}
      <div className="flex justify-between items-center gap-1 mt-3">

        <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded text-[11px]">
          {tech.category}
        </span>

        <span className="text-gray-500 text-[9px]">
          {tech.difficulty}
        </span>

        <span className="text-[9px]">
          ⭐ {tech.rating}
        </span>

      </div>

      {/* Button */}
      <button className={ `text-white w-full rounded-md py-2 mt-3 text-[10px] ${isAlreadyAdded ? "bg-green-950" : "bg-gray-950" } `}>
        {isAlreadyAdded ? " Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechCard;
