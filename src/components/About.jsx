export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-yellow-600 tracking-widest uppercase mb-2">About Us</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Expert-Led Energy Solutions</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img 
            src="/Solarp.jpeg" 
            alt="Expert Solar Installation" 
            className="rounded-3xl shadow-2xl w-full h-auto object-cover" 
          />
          
          <div className="space-y-6">
            <p className="text-gray-600 text-justify text-lg leading-relaxed">
              At <strong>Joennifex Global Tech Ltd</strong>, we don't just sell solar products; we engineer complete energy independence. 
              Our mission is to eliminate power instability for homes and businesses through precision-engineered, durable, and cost-effective solar technology.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900">Why Partner With Us?</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600">✅</span> 
                  <span><strong>Certified Engineering:</strong> Adherence to global safety and durability standards in every installation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600">✅</span> 
                  <span><strong>Post-Installation Support:</strong> Dedicated technical teams to ensure your system runs optimally long-term.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600">✅</span> 
                  <span><strong>Custom Tailored Designs:</strong> Systems specifically calculated for your unique load and power requirements.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}