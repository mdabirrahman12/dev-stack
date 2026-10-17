
const TechCard = ({ tech }: TechCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-3">

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
      <h2 className="text-sm font-bold mt-3">
        {tech.name}
      </h2>

      {/* Description */}
      <p className="text-[10px] text-gray-500 mt-1 leading-4">
        {tech.description}
      </p>

      {/* Details */}
      <div className="flex justify-between items-center gap-1 mt-3">

        <span className="bg-gray-100 text-gray-600 px-1.5 py-1 rounded text-[9px]">
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
      <button className="bg-gray-950 text-white w-full rounded-md py-2 mt-3 text-[10px]">
        Add to Stack
      </button>

    </div>
  );
};

export default TechCard;
