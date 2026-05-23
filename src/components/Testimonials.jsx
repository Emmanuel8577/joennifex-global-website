export default function Testimonials() {
  const reels = [
    { 
      url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2Freel%2F815334467803663%2F&show_text=0",
      spec: "Installed: 5KVA Inverter, 200Ah Lithium Battery, 4 x 550W Panels" 
    },
    { 
      url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2Freel%2F798227659478444%2F&show_text=0",
      spec: "Installed: 3.5KVA Inverter, 2 x 200Ah Gel Batteries, 2 x 450W Panels" 
    },
  ];

  const textReviews = [
    { name: "John D.", text: "The team was incredibly professional. They cleaned up after the install and explained everything perfectly." },
    { name: "Sarah A.", text: "Joennifers Solar Energy delivered exactly what they promised. Consistent, steady power at last!" },
    { name: "Mr. Adebayo", text: "I was skeptical about solar, but their technical expertise turned me into a believer. Great after-sales support." },
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">See Our Impact</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {reels.map((r, i) => (
            <div key={i} className="bg-white p-4 rounded-3xl shadow-sm border flex flex-col">
              {/* This container ensures the full vertical video is visible */}
              <div className="w-full aspect-[9/16] overflow-hidden rounded-2xl mb-4">
                <iframe 
                  src={r.url} 
                  className="w-full h-full"
                  style={{ border: 'none' }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="text-center px-2">
                <p className="text-sm font-bold text-yellow-700 bg-yellow-50 py-2 px-4 rounded-lg inline-block">
                  {r.spec}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-center mb-10">What Our Clients Are Saying</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {textReviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 italic text-gray-700">
              "{r.text}"
              <p className="font-bold text-gray-900 mt-6 not-italic">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}