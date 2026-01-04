import { NavLink } from "react-router";
import useToys from "../hook/useToys";

const Categories = () => {
  const { toy ,loading } = useToys();
  const categories = [...new Set(toy.map((item) => item.subCategory))];

    if (loading) {
    return (
      <div className="flex flex-col items-center py-10 space-y-3">
        <span className="loading loading-spinner loading-md"></span>
        <p className="text-xl font-semibold text-[#627382]">Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-8 md:p-18 bg-[#FFFDF8] ">
      <div className="space-y-3">
        <h2 className="text-[#3A3A3A] font-bold text-3xl sm:text-4xl text-center ">
          Browse by Category
        </h2>
        <p className="text-center text-[18px] text-[#6B7280]">
          Find toys by your child’s interest
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center gap-4 md:w-7/12 mx-auto">
       
        {categories.map((category) => (
          <NavLink
            key={category}
            className="bg-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-2xl font-semibold p-5 rounded-lg border border-[#FDE6C8] text-center "
            
            to={`/category/${category}`}
          >
            {category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
