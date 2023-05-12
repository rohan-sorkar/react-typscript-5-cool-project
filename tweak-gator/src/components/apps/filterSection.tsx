import { RiSearchFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";

interface Props {
  setSearchTerm: (value: string) => void
  searchTerm: string
  filterTerm: string
  setFilter: (value: string) => void
}

const FilterSection = (props : Props) => {
  const {setSearchTerm, searchTerm, filterTerm, setFilter} = props;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-2 h-6 sm:h-8 rounded-full bg-[#5a04ca]"></div>
        <h2 className="text-md sm:text-2xl font-bold text-white">ALL APPS</h2>
      </div>
      <div className="flex items-center gap-2 border p-5 rounded-xl border-[#2a3042]">
        <button onClick={() => setFilter('all')} className={`text-yellow-700 text-sm font-medium flex items-center gap-2 bg-[#2a3042] ${filterTerm === 'all' ? "px-5 py-2 shadow shadow-yellow-700" : "px-5 py-1"}`}>
          ALL
        </button>
        <button onClick={() => setFilter('5')} className={`text-yellow-700 text-sm font-medium flex items-center gap-2 bg-[#2a3042] ${filterTerm === '5' ? "px-5 py-2 shadow shadow-yellow-700" : "px-5 py-1"}`}>
          <AiFillStar className=" text-yellow-500" />
          5.0
        </button>
        <button onClick={() => setFilter('4')} className={`text-yellow-700 text-sm font-medium flex items-center gap-2 bg-[#2a3042] ${filterTerm === '4' ? "px-5 py-2 shadow shadow-yellow-700" : "px-5 py-1"}`}>
          <AiFillStar className=" text-yellow-500" />
          4.0
        </button>
        <button onClick={() => setFilter('3')} className={`text-yellow-700 text-sm font-medium flex items-center gap-2 bg-[#2a3042] ${filterTerm === '3' ? "px-5 py-2 shadow shadow-yellow-700" : "px-5 py-1"}`}>
          <AiFillStar className=" text-yellow-500" />
          3.0
        </button>
        <button onClick={() => setFilter('2')} className={`text-yellow-700 text-sm font-medium flex items-center gap-2 bg-[#2a3042] ${filterTerm === '2' ? "px-5 py-2 shadow shadow-yellow-700" : "px-5 py-1"}`}>
          <AiFillStar className=" text-yellow-500" />
          2.0
        </button>
      </div>
      <div className="relative">
        <RiSearchFill className="input-icon text-lg" />
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="input" type="text" placeholder="Search for apps..." />
      </div>
    </div>
  );
};

export default FilterSection;
