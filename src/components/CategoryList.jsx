import { categories } from "../constants";

const CategoryList = () => {
  return (
    <div className=" pt-20 pb-20  py-8  bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 justify-between gap-4 sm:gap-6 lg:flex lg:justify-center lg:space-x-6">
        {categories.map((category) => (
          <div key={category.title} className="text-center">
            <div className="overflow-hidden rounded-full mx-auto w-24 h-24 sm:w-30 sm:h-30 md:w-30 md:h-30 lg:w-32 lg:h-32">
              <img
                src={category.imageSrc}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-4 block font-code tracking-[2px] uppercase text-xs">
              {category.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
