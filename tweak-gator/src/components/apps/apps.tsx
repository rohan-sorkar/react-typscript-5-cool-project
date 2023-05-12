import FilterSection from "./filterSection";
import AppItem from "./appItem";
import { AppItem as AppType } from "../../types";

interface Props {
  apps: AppType[]
  setSearchTerm: (value: string) => void
  searchTerm: string
  filterTerm: string
  setFilter: (value: string) => void
}

const Apps = (props: Props) => {
  const {apps, setSearchTerm, searchTerm, filterTerm, setFilter} = props;
  return (
    <section className="bg-[#222736] py-12">
      <div className="container mx-auto max-w-6xl px-4 sm:px-8">
        <FilterSection setSearchTerm={setSearchTerm} searchTerm={searchTerm} filterTerm={filterTerm} setFilter={setFilter}/>
        <div className="grid lg:grid-cols-2 gap-5 mt-10">
          {
            apps.map((app) => <AppItem key={app.id} app={app} />)
          }
        </div>
      </div>
    </section>
  );
};

export default Apps;
