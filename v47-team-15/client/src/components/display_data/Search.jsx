import { useState } from "react";

function Search() {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <div className="flex justify-center items-center bg-[#1A183E] gap-2 py-6">
      <div
        className={`relative ${isVisible ? 'w-60' : 'w-0'} overflow-hidden transition-width duration-500`}
      >
        <input
          type="text"
          placeholder="Search cryptocurrencies"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#311B3D] focus:ring-[#40254f] block w-full rounded-md sm:text-sm focus:ring-1"
        />
      </div>
          <i className="bx bx-search text-white text-xl cursor-pointer"
        onClick={toggleVisibility}></i>
      </div>
    </>
  );
}

export default Search;
