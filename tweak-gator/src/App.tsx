import {useState} from 'react';
import Header from "./components/header/header";
import Featured from "./components/featured/featured";
import Footer from "./components/footer/footer";
import Apps from "./components/apps/apps";
import { fakeApps } from "./data";
import { AppItem } from './types';

const App = () => {
  const [apps, setApps] = useState<AppItem []>([...fakeApps]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterTerm, setFilterTerm] = useState<string>('all');

  const handleSearchTerm = (searchText: string) => {
    setSearchTerm(searchText)
  }
  const handleFilterTerm = (value: string) => {
    setFilterTerm(value);
  }
  const featuredApps = apps.filter((app) => app.isFeatured);

  const performSearch = (appLists: AppItem[]) => {
    return appLists.filter((app) => app.title.toLowerCase().includes(searchTerm) || app.name.toLowerCase().includes(searchTerm))
  }
  const searchedApps = performSearch(apps);

  const performFilter = (appLists: AppItem[]) => {
      if(!filterTerm || (filterTerm === 'all')) return appLists;
      const result = performFilterResponse(filterTerm, appLists);
      return result;
  }

  const performFilterResponse = (term: string, appLists: AppItem[]) => {
    if(term === '5') return appLists.filter((app) => app.star.toString() === term);
    if(term === '4') return appLists.filter((app) => app.star.toString() === term);
    if(term === '3') return appLists.filter((app) => app.star.toString() === term);
    if(term === '2') return appLists.filter((app) => app.star.toString() === term);
    return appLists;
  }

  const filteredApps = performFilter(searchedApps);

  return (
    <>
      <Header/>
      <Featured data={featuredApps}/>
      <Apps apps={filteredApps} setSearchTerm={handleSearchTerm} searchTerm={searchTerm} filterTerm={filterTerm} setFilter={handleFilterTerm}/>
      <Footer/>
    </>
  );
};

export default App;
