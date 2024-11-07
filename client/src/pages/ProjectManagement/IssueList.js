// IssueList.js
import React from 'react';

const IssueList = ({ issues }) => {
  return (
    <div className="issue-list bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Logged Issues</h2>
      <ul>
        {issues.map((issue, index) => (
          <li key={index} className="mb-2">
            <strong>{issue.description}</strong> - Assigned To: {issue.assignedTo} - Status: {issue.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;