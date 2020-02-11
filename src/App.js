import React from 'react';
import Schedule from './components/Schedule'
import ScheduleList from './components/ScheduleList'
import SeasonalProduce from './components/SeasonalProduce'
import SeasonalProduceList from './components/SeasonalProduceList'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <ScheduleList/>
        <SeasonalProduceList/>
        </div>
      </header>
    </div>
  );
}

export default App;
