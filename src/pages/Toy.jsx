import { useState } from "react";
import ToyCard from "../components/ToyCard";
import useToys from "../hook/useToys";
import { Link, NavLink, useParams } from "react-router";
import Categories from "../components/Categories";
import { Search } from "lucide-react";

const Toy = () => {
  const { toy, loading } = useToys();
  const { category } = useParams();
  const [sortToy, setSortToy] = useState("none");
  const [search, setSearch] = useState("");
  const categories = [...new Set(toy.map((item) => item.subCategory))];

  if (loading) {
    return (
      <div className="flex flex-col items-center py-10 space-y-3">
        <span className="loading loading-spinner loading-md"></span>
        <p className="text-xl font-semibold text-[#627382]">Loading...</p>
      </div>
    );
  }

  const term = search.trim().toLocaleLowerCase();
  const searchedToy = term
    ? toy.filter((toy) => toy.toyName.toLocaleLowerCase().includes(term))
    : toy;

  const filteredToys = category
    ? searchedToy.filter((item) => item.subCategory === category)
    : searchedToy;

  const sortedToys = [...filteredToys].sort((a, b) => {
    if (sortToy === "price-asc") {
      return a.price - b.price;
    }
    if (sortToy === "price-desc") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="p-10 md:p-20 bg-[#FFFDF8]">
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-[#001931]">
          {category ? category : "All Toys"}
        </h1>
        <p className="text-xl text-[#627382]">
          Explore our wide range of toys from trusted sellers
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-5 justify-between items-center my-10">
        <div>
          <h2 className="text-2xl font-semibold text-[#001931]">
            {`(${sortedToys.length}) Toy Found`}
          </h2>
        </div>
        <div className="space-y-2">
          <label className="input w-70">
            <Search className="text-[#627382]" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="search"
              placeholder="Search Toy ..."
            />
          </label>
          <div className="">
            <label className="form-control max-w-xs">
              <select
                className="select select-bordered"
                value={sortToy}
                onChange={(e) => setSortToy(e.target.value)}
              >
                <option className="text-[#627382]" value="none">
                  Sort By price
                </option>
                <option className="text-[#627382]" value="price-asc">
                  Low -&gt; High
                </option>
                <option className="text-[#627382]" value="price-desc">
                  High -&gt; Low
                </option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-5">
        <div className="col-span-full lg:col-span-1">
          <div className="sticky top-10 space-y-3">
            <h2 className="font-bold text-xl">
              All Categories ({categories.length})
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {categories.map((category) => (
                <NavLink
                  key={category.toyId}
                  className={({
                    isActive,
                  }) => `hover:scale-105 transition-all duration-300 border border-amber-400 text-amber-950 hover:bg-amber-50 hover:shadow-2xl p-3 rounded-lg
                 ${isActive ? "font-bold bg-amber-100" : "font-semibold"}`}
                  to={`/category/${category}`}
                >
                  {category}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {sortedToys.length === 0 ? (
          <h3 className="text-gray-400 font-bold text-3xl col-span-full md:col-span-2 text-center">
            This toy is not available
          </h3>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 col-span-full lg:col-span-3">
            {sortedToys.map((toy) => (
              <ToyCard key={toy.toyId} toy={toy} />
            ))}
          </div>
        )}
      </div>
      {category && (
        <div className="text-center mt-8">
          <Link to={"/toy"}>
            <button className="bg-white hover:scale-105 transition ease-in-out shadow-md hover:shadow-2xl font-semibold rounded-md px-7 py-3 border border-[#fce2c1] text-center ">
              All Toy
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Toy;
