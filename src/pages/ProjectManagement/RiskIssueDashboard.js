// RiskIssueDashboard.js
import React, { useState } from 'react';
import RiskForm from './RiskForm';
import IssueForm from './IssueForm';
import RiskList from './RiskList';
import IssueList from './IssueList';
import PriorityAlerts from './PriorityAlerts';

const RiskIssueDashboard = () => {
  const [risks, setRisks] = useState([]);
  const [issues, setIssues] = useState([]);

  const addRisk = (risk) => setRisks([...risks, risk]);
  const logIssue = (issue) => setIssues([...issues, issue]);

  return (
    <div className="risk-issue-dashboard p-6">
      <h1 className="text-2xl font-bold mb-6">Risk and Issue Management</h1>
      <div className="grid grid-cols-2 gap-6">
        <RiskForm addRisk={addRisk} />
        <IssueForm logIssue={logIssue} />
        <RiskList risks={risks} />
        <IssueList issues={issues} />
        <PriorityAlerts risks={risks} />
      </div>
    </div>
  );
};

export default RiskIssueDashboard;