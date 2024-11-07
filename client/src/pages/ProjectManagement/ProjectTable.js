import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../../services/projectService'; // Adjust the import path as needed
import '../../styles.css'; // Adjust the path as necessary

const ProjectTable = () => {
  const [projects, setProjects] = useState([]); // State for storing projects
  const [filteredProjects, setFilteredProjects] = useState([]); // State for filtered projects
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(10);

  // Fetch projects when the component mounts
  useEffect(() => {
    const getProjects = async () => {
      const projectData = await fetchProjects();
      setProjects(projectData); // Set the fetched projects
      setFilteredProjects(projectData); // Initialize filtered projects
    };

    getProjects();
  }, []);

  // Handle Search
  useEffect(() => {
    setFilteredProjects(
      projects.filter((project) => 
        project.name && project.name.toLowerCase().includes(searchTerm.toLowerCase()) // Check if 'name' exists
      )
    );
  }, [searchTerm, projects]);

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="chan">
      <div className="flex-1"> 
        <div className="project-table">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search Projects"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 bg-blue-200">Project Name</th>
                <th className="px-5 py-3 bg-blue-200">Status</th>
                <th className="px-5 py-3 bg-blue-200">Assigned Team</th>
                <th className="px-5 py-3 bg-blue-200">Start Date</th>
                <th className="px-5 py-3 bg-blue-200">End Date</th>
                <th className="px-5 py-3 bg-blue-200">Budget</th>
              </tr>
            </thead>
            <tbody>
              {currentProjects.map((project, index) => (
                <tr key={index}>
                  <td className="px-5 py-3">{project.name || 'N/A'}</td> {/* Provide fallback if name is missing */}
                  <td className="px-5 py-3">{project.status || 'N/A'}</td> {/* Provide fallback if status is missing */}
                  <td className="px-5 py-3">{project.assignedTeam || 'N/A'}</td> {/* Provide fallback if assignedTeam is missing */}
                  <td className="px-5 py-3">{project.startDate || 'N/A'}</td> {/* Provide fallback if startDate is missing */}
                  <td className="px-5 py-3">{project.endDate || 'N/A'}</td> {/* Provide fallback if endDate is missing */}
                  <td className="px-5 py-3">${project.budget || 0}</td> {/* Provide fallback if budget is missing */}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination mt-4">
            {[...Array(Math.ceil(filteredProjects.length / projectsPerPage)).keys()].map(
              (page) => (
                <button
                  key={page + 1}
                  onClick={() => paginate(page + 1)}
                  className="btn btn-primary"
                >
                  {page + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;
