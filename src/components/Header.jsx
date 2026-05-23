import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import * as pixel from '../utils/pixel';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const waLink = "https://wa.me/2347033750333?text=Hello%20Joennifex%20Global,%20I%20have%20an%20inquiry.";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* Company Logo and Name */}
        <a href="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Joennifex Global Logo" 
            className="h-10 w-auto object-contain" 
          />
          <span className="text-xl font-bold text-blue-950 hidden sm:block">Joennifex Global</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <a href="#products" className="hover:text-yellow-600">Products</a>
          <a href={waLink} target="_blank" rel="noopener noreferrer" 
             onClick={() => pixel.trackEvent('Contact', { method: 'WhatsApp_Header' })}
             className="flex items-center gap-2 border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition">
            <MessageCircle size={18} /> Chat Now
          </a>
          <a href="#order" className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition">Order Now</a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white p-6 flex flex-col space-y-4 shadow-xl border-b">
          <a href="#products" onClick={() => setIsOpen(false)}>Products</a>
          <a href={waLink} target="_blank" rel="noopener noreferrer" 
             onClick={() => pixel.trackEvent('Contact', { method: 'WhatsApp_Mobile' })}
             className="bg-green-600 text-white text-center py-3 rounded-lg font-bold">Chat on WhatsApp</a>
          <a href="#order" onClick={() => setIsOpen(false)} 
             className="bg-yellow-600 text-white text-center py-3 rounded-lg font-bold">Order Now</a>
        </div>
      )}
    </nav>
  );
}