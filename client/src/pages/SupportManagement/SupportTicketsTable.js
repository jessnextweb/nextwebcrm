// SupportTicketsTable.js
import React, { useEffect, useState } from 'react';
import { fetchSupportTickets, updateTicketStatus } from '../../services/supportService';

const SupportTicketsTable = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({});

  useEffect(() => {
    fetchSupportTickets().then((data) => setTickets(data));
  }, []);

  const handleStatusChange = (ticketId, status) => {
    updateTicketStatus(ticketId, status).then((updatedTicket) => {
      setTickets(tickets.map((ticket) => (ticket.id === updatedTicket.id ? updatedTicket : ticket)));
    });
  };

  return (
    <div className="support-tickets-table bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Support Tickets</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Client Name</th>
            <th>Issue</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.clientName}</td>
              <td>{ticket.issue}</td>
              <td>{ticket.status}</td>
              <td>
                <select
                  value={selectedStatus[ticket.id] || ticket.status}
                  onChange={(e) => {
                    setSelectedStatus({ ...selectedStatus, [ticket.id]: e.target.value });
                    handleStatusChange(ticket.id, e.target.value);
                  }}
                  className="p-2 border rounded-md"
                >
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Closed">Closed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupportTicketsTable;