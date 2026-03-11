import React from "react";
import { Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

function Footer () {
    
        return (
        <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10"> 
            <aside>
            <h6 className="text-xl font-bold mb-4">CS — Ticket System</h6>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[350px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            </aside>
        <nav>
            <h6 className="text-base font-semibold mb-4">Company</h6>
            <a className="link ">About us</a>
            <a className="link ">Our Mission</a>
            <a className="link ">Contact Saled</a>
            
        </nav>
         <nav>
            <h6 className="text-base font-semibold mb-4">Company</h6>
            <a className="link ">Products & Services</a>
            <a className="link ">Customer Stories</a>
            <a className="link ">Download App</a>
            
        </nav>
        <nav>
            <h6 className="text-base font-semibold mb-4">Information</h6>
            <a className="link ">Privacy Policy</a>
            <a className="link ">Terms & Conditions</a>
            <a className="link ">Join Us</a>
            
        </nav>
        <nav>
            <h6 className="text-base font-semibold mb-4">Social Links</h6>
            <a className="link flex items-center "><span className="bg-white text-black rounded-full w-6 h-6 mr-3 flex items-center justify-center shrink-0">
                    <Twitter className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
                  </span>@CS — Ticket System</a>
            <a className="link flex items-center"><span className="bg-white text-black rounded-full w-6 h-6 mr-3 flex items-center justify-center shrink-0">
                    <Linkedin className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
                  </span>@CS — Ticket System</a>
            <a className="link flex items-center"><span className="bg-white text-black rounded-full w-6 h-6 mr-3 flex items-center justify-center shrink-0">
                    <Facebook className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
                  </span>@CS — Ticket System</a>
            <a className='link flex items-center'><span className="bg-white text-black rounded-full w-6 h-6 mr-3 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
                  </span>support@cst.com</a>   

            
        </nav>
          
            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © 2025 CS — Ticket System. All rights reserved.
            </div>
     
       
        </div>
        
       );
}

export default Footer