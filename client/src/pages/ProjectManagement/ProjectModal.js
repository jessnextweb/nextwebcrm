import React, { useState } from 'react';
import '../../styles.css'; // Import your styles

const ProjectModal = ({ onSave = () => {}, project = {} }) => {
  const [name, setName] = useState(project.name || '');
  const [description, setDescription] = useState(project.description || '');
  const [startDate, setStartDate] = useState(project.startDate || '');
  const [endDate, setEndDate] = useState(project.endDate || '');
  const [assignedTeam, setAssignedTeam] = useState(project.assignedTeam || '');
  const [budget, setBudget] = useState(project.budget || '');

  const [isModalOpen, setIsModalOpen] = useState(true); // Manage modal visibility
  const [isSaved, setIsSaved] = useState(false); // Manage saved status

  const handleSave = () => {
    const newProject = {
      name,
      description,
      startDate,
      endDate,
      assignedTeam,
      budget,
    };

    onSave(newProject);
    setIsSaved(true);
    setIsModalOpen(false); // Close the modal after saving
  };

  const handleClose = () => {
    setIsModalOpen(false); // Close the modal when cancel is clicked
  };

  if (!isModalOpen) {
    return null; // If modal is closed, return nothing
  }

  return (
    <div className="modal">
      <div className="modal-box">
        <h2>{project.id ? 'Edit Project' : 'Add New Project'}</h2>
        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered"
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea textarea-bordered"
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="input input-bordered"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="input input-bordered"
        />
        <input
          type="text"
          placeholder="Assigned Team"
          value={assignedTeam}
          onChange={(e) => setAssignedTeam(e.target.value)}
          className="input input-bordered"
        />
        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="input input-bordered"
        />
        <div className="modal-action">
          <button onClick={handleSave} className="btn btn-primary">
            Save
          </button>
          <button onClick={handleClose} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
