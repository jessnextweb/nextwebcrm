// TicketTable.js
import React, { useState, useEffect } from 'react';
import { fetchTickets } from '../../services/supportService';

const TicketTable = () => {
  const [tickets, setTickets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchTickets().then((data) => setTickets(data));
  }, []);

  const filteredTickets = tickets.filter((ticket) =>
    ticket.issueSummary?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search tickets"
        className="mb-4 p-2 border"
      />
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Issue Summary</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.issueSummary}</td>
              <td>{ticket.status}</td>
              <td>{ticket.priority}</td>
              <td>
                <button className="bg-blue-500 text-white p-2 rounded-md">View</button>
                <button className="bg-red-500 text-white p-2 rounded-md ml-2">Escalate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;