const FindRecipe = () => {
  return (
    <div className="bg-n-7 mt-6 py-8 flex flex-col items-center justify-center lg:flex-row">
      <h1 className="text-3xl font-light" data-text="Find a Recipe">
        Find a Recipe
      </h1>
      <div className="mt-3 flex w-full lg:w-auto flex-col lg:flex-row lg:space-x-4 lg:ml-4">
        <Dropdown title="Browse by Diet" />
        <Dropdown title="Browse by Course" />
        <Dropdown title="Browse by Cuisine" />
      </div>
    </div>
  );
};

const Dropdown = ({ title }) => {
  return (
    <div className="bg-white pt-[1rem] pr-[1.1rem] pb-[1rem] pl-[1.5rem] flex items-center justify-between lg:w-auto transition-colors hover:bg-n-1 hover:text-color-2 group">
      <span className="font-code tracking-[2px] uppercase text-xs">
        {title}
      </span>
      <svg
        className="w-4 h-4 text-color-1 transition-colors group-hover:text-color-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </div>
  );
};

export default FindRecipe;
