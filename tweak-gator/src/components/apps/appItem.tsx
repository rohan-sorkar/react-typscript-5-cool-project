import { AiFillStar } from "react-icons/ai";
import { MdOutlineAndroid } from "react-icons/md";
import { RiAppleFill } from "react-icons/ri";
import { AppItem as AppType } from "../../types";

interface Props {
  app: AppType
}

const AppItem = ({app} : Props) => {
  const {img, author, name, title, star} = app;
  return (
    <div className="listing-card hover:scale-105 transition cursor-pointer">
      <div>
        <img
          className="rounded-xl inline-block w-28 h-28 object-cover"
          src={img}
          alt={name}
        />
      </div>
      <div className="space-y-2">
        <span className="text-xs text-slate-500">
          Author:
          <span className="text-[#5a04ca] font-bold capitalize">author</span>
        </span>
        <div className="flex items-center gap-2 sm:gap-5 divide-x divide-slate-900">
          <h3 className="text-sm sm:text-2xl font-medium text-white">
            {name}
          </h3>
          <p className=" sm:font-medium text-slate-600 sm:text-lg pl-2 sm:pl-4 flex items-center gap-1">
            <AiFillStar className="text-yellow-500 text-xl" /> {star}.0
          </p>
        </div>
        <p className="text-sm sm:text-lg text-slate-400">
          {title}
        </p>
      </div>
      <div className="absolute top-4 right-5 sm:right-10 flex items-center gap-2">
        <MdOutlineAndroid className="text-slate-300 text-xl" />
        <RiAppleFill className="text-slate-300 text-xl" />
      </div>
    </div>
  );
};

export default AppItem;
