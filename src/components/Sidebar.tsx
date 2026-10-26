
import { FiX } from "react-icons/fi";
const Sidebar = ({ stack, handleRemoveFromStack, handleRemoveAll }: SidebarProps) => {
  return (
      <div className="flex flex-col gap-1 rounded-2xl border border-gray-100 bg-white p-5">
        <h3 className="text-base font-bold">Your Stack</h3>

        <p className="mb-3 text-gray-400">
          {stack.length === 0
            ? "No technologies selected yet."
            : `${stack.length} technologies selected`}
        </p>

        {stack.length === 0 && (
          <div className="rounded-xl bg-gray-50 p-6 text-center text-gray-500">
            Your stack is empty.
          </div>
        )}
        {stack.map((tech) => (
          <div key={tech.id} className="flex items-center gap-3 rounded-lg bg-gray-50 px-3 py-2">
            <img src={tech.icon} alt={tech.name} className="h-7 w-7" />
            <div className="flex-1">
              <p className="text-sm font-semibold">{tech.name}</p>
              <p className="text-xs text-gray-400">{tech.category}</p>
            </div>
            <button
              onClick={() => handleRemoveFromStack(tech.id)}
              className="cursor-pointer rounded-b-none "
              aria-label={`Remove ${tech.name}`}
            >
           <FiX />
            </button>
          </div>
        ))}

        {stack.length > 0 && (
          <button
            onClick={handleRemoveAll}
            className="mt-4 w-full cursor-pointer rounded-lg border border-red-600 py-3 text-sm font-semibold text-red-600"
          >
            Remove All
          </button>
        )}
      </div>
  );
};

export default Sidebar;

