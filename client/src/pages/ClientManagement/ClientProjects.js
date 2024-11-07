import React from 'react';

const ClientProjects = ({ projects }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Your Projects</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Title</th>
            <th className="py-2">Description</th>
            <th className="py-2">Status</th>
            <th className="py-2">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td className="py-2">{project.title}</td>
              <td className="py-2">{project.description}</td>
              <td className="py-2">{project.status}</td>
              <td className="py-2">{new Date(project.deadline).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientProjects;