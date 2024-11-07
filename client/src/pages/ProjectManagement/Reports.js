import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import Chart from 'chart.js/auto';
import * as d3 from 'd3';
import '../../styles.css'; 

const Reports = () => {
  const projects = [
    { id: 1, name: 'Project Alpha' },
    { id: 2, name: 'Project Beta' },
    { id: 3, name: 'Project Gamma' },
    { id: 4, name: 'Project Delta' },
  ];

  const [selectedProject, setSelectedProject] = useState(0);
  const [reportType, setReportType] = useState('Time Spent');
  const [reportData, setReportData] = useState(null);

  const handleGenerateReport = () => {
    if (!selectedProject) return alert('Please select a project.');

    const projectId = Number(selectedProject);
    const project = projects.find((p) => p.id === projectId);


    if (!project) return alert('Project not found.');

    let data;
    if (reportType === 'Time Spent') {
      data = [
        { task: 'Design', hours: 10 },
        { task: 'Development', hours: 40 },
        { task: 'Testing', hours: 15 },
      ];
    } else if (reportType === 'Budget') {
      data = [{ spent: 5000, allocated: 10000 }];
    } else if (reportType === 'Task Completion') {
      data = [{ completed: 8, total: 10 }];
    }

    setReportData(data);
    displayReportGraph(data, reportType);
  };

  const exportReport = (format) => {
    if (!reportData || reportData.length === 0) return alert('No report data available to export.');

    if (format === 'CSV') {
      if (Array.isArray(reportData) && reportData.length > 0) {
        const csvContent =
          'data:text/csv;charset=utf-8,' +
          Object.keys(reportData[0]).join(',') +
          '\n' +
          reportData.map((row) => Object.values(row).join(',')).join('\n');
        const encodedUri = encodeURI(csvContent);
        saveAs(encodedUri, `${reportType}_Report.csv`);
      } else {
        alert('No valid report data available for CSV export.');
      }
    } else if (format === 'PDF') {
      const doc = new jsPDF();
      doc.text('Report Type: ' + reportType, 10, 10);
      doc.text(JSON.stringify(reportData, null, 2), 10, 20);
      doc.save(`${reportType}_Report.pdf`);
    }
  };

  const displayReportGraph = (data, type) => {
    const canvas = document.getElementById('chart');
    const svg = d3.select('#d3-chart');

    if (type === 'Time Spent') {
      if (canvas) {
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.map((item) => item.task),
            datasets: [
              {
                label: 'Hours Spent',
                data: data.map((item) => item.hours),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
        });
      } else {
        console.error('Canvas element not found');
      }
    }

    if (type === 'Budget') {
      svg.attr('width', 400).attr('height', 200);
      svg.selectAll('*').remove();

      svg
        .append('rect')
        .attr('x', 50)
        .attr('y', 50)
        .attr('width', (data[0].spent / data[0].allocated) * 300)
        .attr('height', 50)
        .attr('fill', 'blue');

      svg.append('text').attr('x', 50).attr('y', 120).text(`Spent: $${data[0].spent}, Allocated: $${data[0].allocated}`);
    }
  };

  return (
    <div className="reports-page">
      <div className="form-control">
        <label className="label">Select Project</label>
        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          className="select select-bordered"
        >
          <option value="" disabled>
            Select a project
          </option>
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))
          ) : (
            <option disabled>No projects available</option>
          )}
        </select>
      </div>
      <div className="form-control mt-4">
        <label className="label">Report Type</label>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="select select-bordered"
        >
          <option>Time Spent</option>
          <option>Budget</option>
          <option>Task Completion</option>
        </select>
      </div>
      <button onClick={handleGenerateReport} className="btn btn-primary mt-4" style={{ width: '100%' }}>
        Generate Report
      </button>

      <div className="export-buttons mt-4">
        <button onClick={() => exportReport('CSV')} className="btn btn-secondary">
          Export as CSV
        </button>
        <button onClick={() => exportReport('PDF')} className="btn btn-secondary ml-2">
          Export as PDF
        </button>
      </div>

      <div className="chart-container mt-4">
        {reportType === 'Time Spent' ? (
          <canvas id="chart" width="400" height="200"></canvas>
        ) : (
          <svg id="d3-chart"></svg>
        )}
      </div>
    </div>
  );
};

export default Reports;
