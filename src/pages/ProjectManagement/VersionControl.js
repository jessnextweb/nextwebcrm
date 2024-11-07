// VersionControl.js
import React, { useEffect, useState } from 'react';
import { fetchFileVersions } from '../../services/fileService';

const VersionControl = ({ fileId }) => {
  const [versions, setVersions] = useState([]);

  useEffect(() => {
    fetchFileVersions(fileId).then(setVersions);
  }, [fileId]);

  return (
    <div className="version-control bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Version Control</h2>
      <ul>
        {versions.map((version, index) => (
          <li key={index}>
            <strong>Version {version.number}:</strong> {version.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VersionControl;
