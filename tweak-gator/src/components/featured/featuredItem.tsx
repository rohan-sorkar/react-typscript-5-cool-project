import { AiFillStar } from "react-icons/ai";
import { AppItem } from "../../types";

interface Props {
  app: AppItem
}

const FeaturedItem = ({ app }: Props) => {
  const {img, name, star} = app;
  return (
    <div className="featured-card">
      <img
        src={img}
        alt="feature-img"
        className="rounded-lg object-cover"
      />
      <h4 className="text-sm sm:text-lg font-bold capitalize">{name}</h4>
      <p className="font-medium text-slate-600 flex items-center justify-center gap-1">
        <AiFillStar className="text-yellow-500 text-xl" /> {star}.0
      </p>
    </div>
  );
};

export default FeaturedItem;
