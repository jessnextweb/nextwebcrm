import React, { useState } from 'react';
import SupportTicketsTable from './SupportTicketsTable';
import RealTimeStatus from './RealTimeStatus';
import AIResolutionSuggestions from './AIResolutionSuggestions';

const SupportOverview = () => {
  const [selectedIssueId, setSelectedIssueId] = useState(null);

  const handleSelectIssue = (issueId) => {
    setSelectedIssueId(issueId);
  };

  return (
    <div className="support-overview bg-gray-50 p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">Support Overview</h2>
      <SupportTicketsTable onSelectIssue={handleSelectIssue} />
      <RealTimeStatus />
      {selectedIssueId && <AIResolutionSuggestions issueId={selectedIssueId} />}
    </div>
  );
};

export default SupportOverview;