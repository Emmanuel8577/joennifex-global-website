import * as pixel from '../utils/pixel';

export default function Hero() {
  const waLink = "https://wa.me/2347033750333?text=Hi,%20I%20am%20interested%20in%20a%20solar%20installation.";

  return (
    <section className="bg-yellow-50 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            End Power Outages. <span className="text-yellow-600">Own Your Sunlight.</span>
          </h1>
          <p className="text-xl text-gray-600">
            Joennifex Global Tech Ltd delivers premium, industrial-grade solar solutions. 
            Stop paying for unreliable grids—switch to clean, consistent, and cost-effective power today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#order" className="bg-yellow-600 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-yellow-700 transition shadow-lg">
              Get Your Custom Quote
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" 
               onClick={() => pixel.trackEvent('Contact', { method: 'WhatsApp_Hero' })}
               className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-green-700 transition shadow-lg flex items-center justify-center gap-2">
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="flex-1 w-full">
          <img src="/solar7.jpeg" alt="Solar Energy Solution" className="rounded-3xl shadow-2xl w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
}