import { Zap, MessageCircle, ChevronRight } from 'lucide-react';
import * as pixel from '../utils/pixel';

export default function Hero() {
  const waLink = "https://wa.me/2347033750333?text=Hi,%20I%20am%20interested%20in%20a%20solar%20generator/panel.";

  return (
    <section className="bg-gradient-to-b from-yellow-50 to-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Content */}
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold text-sm animate-pulse">
            <Zap size={16} /> Trusted Solar Experts
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            End Power Outages. <span className="text-yellow-600">Own Your Sunlight.</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Joennifex Global delivers premium, industrial-grade solar solutions. 
            Stop paying for unreliable grids—switch to clean, consistent, and cost-effective power today.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#order" className="group bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-yellow-600 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              Get Your Custom Quote <ChevronRight size={18} />
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" 
               onClick={() => pixel.trackEvent('Contact', { method: 'WhatsApp_Hero' })}
               className="bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-bold text-center hover:bg-green-600 hover:text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Right Side: Image with glow effect */}
        <div className="flex-1 w-full relative group">
          <div className="absolute -inset-4 bg-yellow-400 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></div>
          <img 
            src="/solar7.jpeg" 
            alt="Solar Energy Solution" 
            className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]" 
          />
        </div>
      </div>
    </section>
  );
}