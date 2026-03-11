import React from 'react';
import { Calendar } from 'lucide-react';


function TicketCard ({ ticket, onClick }) {

  const priorityColor = {
    "HIGH PRIORITY": "text-red-500",
    "MEDIUM PRIORITY": "text-yellow-500",
    "LOW PRIORITY": "text-green-500"
  };

  const statusBadge = {
    Open: "bg-green-100 text-green-800 bg-green-500",
    "In-Progress": "bg-yellow-100 text-yellow-800 bg-yellow-500",
    Resolved: "bg-gray-100 text-gray-800 bg-gray-500"
  };
  

  return (
    <div
      onClick={() => onClick?.(ticket)}
      className={`bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col h-full transition-all
      ${onClick ? "cursor-pointer hover:shadow-md hover:border-[#8B5CF6] hover:-translate-y-0.5" : ""}`}
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-800 text-sm pr-4">{ticket.title}</h4>

        {ticket.status && (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusBadge[ticket.status]?.split(" ")[0]} ${statusBadge[ticket.status]?.split(" ")[1]}`}>
            <span className={`w-2 h-2 mr-1.5 rounded-full ${statusBadge[ticket.status]?.split(" ")[2]}`}></span>
            {ticket.status}
          </span>
        )}
      </div>

      <p className="text-gray-500 text-xs mb-4 line-clamp-2 leading-relaxed">
        {ticket.description}
      </p>

      <div className="flex items-center justify-between text-[11px] font-medium mt-auto pt-2">
        <div className="flex items-center space-x-3">
          <span className="text-gray-400">{ticket.id}</span>
          <span className={priorityColor[ticket.priority] || "text-gray-500"}>
            {ticket.priority}
          </span>
        </div>

        <div className="flex items-center space-x-3 text-gray-500">
          <span>{ticket.customerName}</span>
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1 text-gray-400" />
            {ticket.date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard

