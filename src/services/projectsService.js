import React from 'react';
import GanttChart from './GanttChart';

const App = () => {
  const apiUrl = 'https://dummyjson.com/todos'; // Replace with your public API URL

  return (
    <div className="App">
      <h1>Project Gantt Chart</h1>
      <GanttChart apiUrl={apiUrl} />
    </div>
  );
};

export default App;
