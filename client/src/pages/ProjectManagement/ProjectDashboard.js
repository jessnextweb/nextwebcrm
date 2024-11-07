// ProjectDashboard.js
import React from 'react';
import Chat from '../../pages/ProjectManagement/Chat';
import FileSharing from '../../pages/ProjectManagement/FileSharing';
import Comments from '../../pages/ProjectManagement/Comments';
import Notifications from '../../pages/ProjectManagement/Notifications';
import VersionControl from '../../pages/ProjectManagement/VersionControl';

const ProjectDashboard = () => {
  return (
    <div className="project-dashboard p-6">
      <h1 className="text-2xl font-bold mb-6">Project Collaboration Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <Chat />
        <FileSharing />
        <Comments taskId={1} />
        <Notifications />
        <VersionControl fileId={1} />
      </div>
    </div>
  );
};

export default ProjectDashboard;