import React from "react";
import { CheckCircle2 } from 'lucide-react';

function Sidebar ({ inProgressTickets, resolvedTickets, onResolveTicket }) {

  return (
    <div className="space-y-8">
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Task Status</h2>
      {inProgressTickets.length === 0 ? (
        <p className="text-sm text-gray-500">Select a ticket to add to Task Status</p>
      ) : (
        <div className="space-y-3">
          {inProgressTickets.map(ticket => (
            <div key={ticket.id} className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm flex flex-col gap-2">
              <div className="text-sm font-medium text-gray-800">{ticket.title}</div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{ticket.id}</span>
                <button 
                  onClick={() => onResolveTicket(ticket)}
                  className="text-xs flex items-center text-[#10B981] hover:text-[#059669] font-medium transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  Resolve
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Resolved Task</h2>
      {resolvedTickets.length === 0 ? (
        <p className="text-sm text-gray-500">No resolved tasks yet.</p>
      ) : (
        <div className="space-y-3">
          {resolvedTickets.map(ticket => (
            <div key={ticket.id} className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex flex-col gap-2 opacity-75">
              <div className="text-sm font-medium text-gray-600 line-through">{ticket.title}</div>
              <span className="text-xs text-gray-400">{ticket.id}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
  );
};

export default Sidebar
