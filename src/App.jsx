import { useState } from 'react'
import Header from './components/Header';
import HeroArea from './components/HeroArea';
import TicketCard from './components/TicketCard';
import ticketsData from '/data/ticket.json';
import  Sidebar  from './components/Sidebar';
import NewTicketModal from './components/NewTicketModal';
import Footer from './components/Footer';
import './App.css'



// Initial Data
const initialTickets = ticketsData;

function App() {
  
 const [tickets, setTickets] = useState(initialTickets);
 const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTicketClick = (ticket) => {
    if (ticket.status === 'Open') {
      setTickets(tickets.map(t => t.id === ticket.id ? { ...t, status: 'In-Progress' } : t));
    }
  };

  const handleResolveTicket = (ticket) => {
    setTickets(tickets.map(t => t.id === ticket.id ? { ...t, status: 'Resolved' } : t));
  };

  const handleNewTicket = (newTicketData) => {
    const newId = `#${1000 + tickets.length + 1}`;
    const date = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
    
    const newTicket = {
      ...newTicketData,
      id: newId,
      status: 'Open',
      date
    };
    setTickets([newTicket, ...tickets]);
  };
 
  const visibleTickets = tickets.filter(t => t.status !== 'Resolved');
  const inProgressTickets = tickets.filter(t => t.status === 'In-Progress');
  const resolvedTickets = tickets.filter(t => t.status === 'Resolved');

  return (
      <div className="min-h-screen bg-[#F8F9FA] font-sans">
        <Header onNewTicket={() => setIsModalOpen(true)}/>
        <div className="max-w-7xl mx-auto px-8 py-8">
        <HeroArea
        inProgressCount={inProgressTickets.length} 
          resolvedCount={resolvedTickets.length} />
          
         <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
           <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleTickets.map(ticket => (
                <TicketCard 
                  key={ticket.id} 
                  ticket={ticket} 
                  onClick={ticket.status === 'Open' ? handleTicketClick : undefined} 
                />
              ))}
              {visibleTickets.length === 0 && (
                <div className="col-span-1 md:col-span-2 text-center py-12 text-gray-500 bg-white rounded-xl border border-gray-100 border-dashed">
                  No open tickets. You're all caught up!
                </div>
              )}
            </div>
          </div>
          <div className="w-full lg:w-72 shrink-0">
            <Sidebar 
              inProgressTickets={inProgressTickets}
              resolvedTickets={resolvedTickets}
              onResolveTicket={handleResolveTicket}
            />
          </div>
         </div>
       </div>

       <NewTicketModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleNewTicket} 
      />
        <Footer/>
      </div>
     
      
      
  )
}

export default App
