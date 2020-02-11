import React from 'react';
import Nav from './components/Nav';
import Schedule from './components/Schedule'
import ScheduleList from './components/ScheduleList'
import SeasonalProduce from './components/SeasonalProduce'
import SeasonalProduceList from './components/SeasonalProduceList'
import './App.css';



function App() {
  return (
    <div className="App">
    <header className="App-header">
    <Nav/>
    </header>
    <div className="opening">
    <h1>Beanstalk Bazaar</h1>
    </div>
    <div className="produceColumns">
      <div>
        <SeasonalProduceList/>
      </div>
      <div>
        <ScheduleList/>
      </div>
    </div>
    </div>
  );
}

export default App;
