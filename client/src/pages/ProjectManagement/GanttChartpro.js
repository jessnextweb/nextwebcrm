import React, { useState, useEffect } from 'react';
import { Gantt, ViewMode } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

const GanttChart = ({ apiUrl }) => {
  const [projects, setProjects] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch data from the public API
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://retoolapi.dev/X792eG/data");  // Fetch data from the API
        console.log("response",response)
        const data = await response.json();    // Parse the response to JSON
        console.log("ganttdata",data)
        setProjects(data);                     // Set the fetched data to the state
        setLoading(false);                     // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);                     // Set loading to false if there is an error
      }
    };

    fetchProjects();
  }, [apiUrl]);

 
  const ganttData = projects
    .filter(project => project.startDate && project.endDate) // Ensure startDate and endDate exist
    .map((project) => ({
      id: project.id || Math.random().toString(),            // Unique task identifier (fallback if missing)
      name: project.name || 'Unnamed Task',                  // Task name (fallback if missing)
      start: new Date(project.startDate),                    // Start date of the task
      end: new Date(project.endDate),                        // End date of the task
      type: 'task',                                          // Type of task
      progress: project.progress || 0,                       // Progress of the task (fallback to 0 if missing)
      dependencies: project.dependencies || [],              // Task dependencies
    }));

  if (loading) {
    return <div>Loading Gantt Chart...</div>;
  }

  if (ganttData.length === 0) {
    return <div>No data available to display in the Gantt chart.</div>;
  }

  return (
    <div className="gantt-chart">
      <Gantt tasks={ganttData} viewMode={ViewMode.Day} />
    </div>
  );
};

export default GanttChart;
