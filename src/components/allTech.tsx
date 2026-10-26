import toast from "react-hot-toast";
import TechCard from "./TechCard";
import Sidebar from "./Sidebar";
const AllTech = ({ allTech, stack, setStack }:AllTechProps) => {
  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) => previousStack.filter((item) => item.id !== id));
    toast("Technology removed!");
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed!");
  };

  return (
    <div className="grid gap-2 lg:grid-cols-12 ">
      <div className="grid gap-1 md:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
        {allTech.map((tech) => (
          <TechCard key={tech.id} tech={tech} stack={stack} setStack={setStack} />
        ))}
      </div>
      <div className="lg:col-span-3">
        <Sidebar
          stack={stack}
          handleRemoveFromStack={handleRemoveFromStack}
          handleRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  );
};

export default AllTech;

