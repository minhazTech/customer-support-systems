import React from "react";
import { Plus } from 'lucide-react';
function Header({onNewTicket}) {
    
        return (
           <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                    <li><button onClick={onNewTicket} className="btn grid-color">
                         <Plus className="w-4 h-4 mr-1" /> New Ticket
                        </button></li>
                    </ul>
                </div>
                <div className="mt-1">
                    <a className='text-xl font-bold px-10' href='#'>CS — Ticket System</a>
                </div>
                
                </div>
                <div className="navbar-end hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-10 menu-sm items-center">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                    <li><button onClick={onNewTicket} className="btn ml-2 grid-color flex items-center">
                        <Plus className="w-4 h-4 mr-1" />
                        New Ticket
                        </button>
                    </li>
                </ul>
                </div>
            </div>
        );
}


export default Header;