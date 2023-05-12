import FeaturedItem from "./featuredItem";
import { AppItem } from "../../types";

interface Props {
  data: AppItem[]
}

const Featured = ({ data }: Props) => {
  return (
    <section className="bg-[#2a3042] py-12">
        <div className="container mx-auto max-w-6xl px-4 sm:px-8">
          <div className="mb-10 flex items-center gap-3">
            <div className="w-2 h-8 rounded-full bg-[#5a04ca]"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              FEATURED APPS
            </h2>
          </div>
          <div className="grid grid-cols-6 justify-center gap-7">
            {
              data.map((app) => <FeaturedItem key={app.id} app={app}/> )
            }
          </div>
        </div>
      </section>
  )
}

export default Featured;