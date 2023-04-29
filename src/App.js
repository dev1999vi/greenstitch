import './App.css';
import Cards from './component/Card/Cards';
import SearchBar from './component/SearchBar/SearchBar';
import SideBar from './component/SideBar';
import BarGraph from './component/Chart/BarGraph';
import PieChart from './component/Chart/PieChart';

function App() {
  return (
    <div className="App">
      <div className='left'>
        <SideBar />
      </div>
      <div className='right'>
        <div className='nav'>
          <SearchBar/>
        </div>
        <div className='card-container'>
          <Cards/>
        </div>
        <div className='chart'>
          <div className='bar-graph'>
            <BarGraph />
          </div>
          <div className='pie-chart'>
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
