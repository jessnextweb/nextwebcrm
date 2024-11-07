import React, { useState, useEffect } from 'react';
import OperationReportForm from './OperationReportForm';
import OperationChartComponent from './OperationChartComponent';
import OperationReportTable from './OperationReportTable';
import { generateOperationReport, fetchOperationReports } from '../../services/operationReportService';

const OperationReportsOverviewTab = () => {
  const [reports, setReports] = useState([]);
  const [chartData, setChartData] = useState([]);

  const generateNewOperationReport = async (reportParams) => {
    const newReport = await generateOperationReport(reportParams);
    setReports([...reports, newReport]);
    // Fetch new data to be displayed in chart
    setChartData(newReport.data);
  };

  useEffect(() => {
    const getReports = async () => {
      const data = await fetchOperationReports();
      setReports(data);
    };

    getReports();
  }, []);

  return (
    <div className="operation-reports-overview bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Operation Reports Overview</h2>
      <OperationReportForm generateNewOperationReport={generateNewOperationReport} />
      <OperationChartComponent data={chartData} />
      <OperationReportTable reports={reports} />
    </div>
  );
};

export default OperationReportsOverviewTab;