import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import OrderForm from './components/OrderForm';
import { FB_PIXEL_ID } from './utils/pixel';
import { ShieldCheck, Mail, ArrowLeft } from "lucide-react";

// 1. Standalone Privacy Policy Page Component
function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6 font-sans text-slate-800">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200/80">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-amber-100 text-amber-700 rounded-xl">
            <ShieldCheck size={28} />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900">
            Privacy Policy
          </h1>
        </div>

        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">
          Joennifex Global Tech Ltd
        </p>

        <div className="space-y-6 text-slate-600 leading-relaxed text-base border-t border-slate-100 pt-6">
          <p>
            Joennifex Global Tech Ltd collects the information you submit
            (name, phone number, and responses) solely to process your inquiry
            or order for MECO Solar products.
          </p>

          <p>
            We do not sell or share your information with third parties. Your
            details are used only to contact you via WhatsApp, phone, or email
            regarding your order.
          </p>

          <p>
            You may request that we delete your information at any time by
            contacting{" "}
            <a
              href="mailto:joennifexglobal@gmail.com"
              className="text-amber-600 font-medium underline hover:text-amber-700 inline-flex items-center gap-1"
            >
              <Mail size={16} /> joennifexglobal@gmail.com
            </a>
            .
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 text-xs text-slate-400 text-center">
          © 2026 Joennifex Global Tech Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
}

// 2. Landing Page View Component
function LandingPage() {
  return (
    <main className="relative min-h-screen font-sans text-gray-900 bg-gray-50">
      <Header />
      <Hero />
      <Gallery />
      <About />
      <Testimonials />
      <OrderForm />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/2347033750333?text=Hello%20Joennifex%20Global,%20I%20am%20interested%20in%20your%20solar%20solutions." 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={() => window.fbq && window.fbq('track', 'Contact', { method: 'WhatsApp_Floating_Button' })}
        className="fixed bottom-6 right-6 z-[9999] bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Chat with us on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.591 5.52 0 10.02-4.5 10.02-10.02s-4.5-10.02-10.02-10.02-10.02 4.5-10.02 10.02c0 2.091.655 4.072 1.765 5.766l-1.026 3.739 3.869-1.076z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          
          {/* Company Info */}
          <div>
            <h4 className="text-white font-bold text-xl mb-4">Joennifex Global Tech Ltd</h4>
            <p className="text-sm leading-relaxed">Providing reliable, sustainable, and professional solar energy solutions across Benue State.</p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-bold mb-4">Our Locations</h4>
            <p className="text-sm mb-4">
              <span className="block text-yellow-500 font-bold">Head Office:</span> 
              No. 98, Gboko Road, Beside Flight Park Wurukum, Makurdi, Benue State.
            </p>
            <p className="text-sm">
              <span className="block text-yellow-500 font-bold">Branch Office:</span> 
              Direct Opposite Akoso Pharmacy, Akpehe, Makurdi, Benue State.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">📞 +234 703 375 0333</p>
            <p className="text-sm mb-2">📞 +234 906 911 0990</p>
            <p className="text-sm mb-2">📞 +234 810 618 6668</p>
            <p className="text-sm mb-4">✉️ joennifexglobal@gmail.com</p>
            
            <a 
              href="https://wa.me/2349069110990?text=Hello%20Joennifex%20Global,%20I%20have%20an%20inquiry." 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => window.fbq && window.fbq('track', 'Contact', { method: 'WhatsApp_Footer' })}
              className="inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-gray-800 text-sm flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400">
          <span>© 2026 Joennifex Global Tech Ltd. All rights reserved.</span>
          <span className="hidden sm:inline">•</span>
          <Link
            to="/privacy-policy"
            className="text-gray-400 hover:text-yellow-500 underline transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </main>
  );
}

// 3. Main Application Component with Top-Level Router
export default function App() {
  useEffect(() => {
    // Meta Pixel Initialization
    !function(f,b,e,v,n,t,s) {
      if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)
    }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
    
    if (FB_PIXEL_ID) {
      window.fbq('init', FB_PIXEL_ID);
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}