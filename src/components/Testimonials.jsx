import { motion } from 'framer-motion';
import { Star, Award, Zap } from 'lucide-react';

export default function Testimonials() {
  const reels = [
    { url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2Freel%2F815334467803663%2F&show_text=0", spec: "Installed: 5KVA Inverter, 200Ah Lithium Battery, 4 x 550W Panels" },
    { url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2Freel%2F798227659478444%2F&show_text=0", spec: "Installed: 3.5KVA Inverter, 2 x 200Ah Gel Batteries, 2 x 450W Panels" },
  ];

  const textReviews = [
    { name: "John D.", text: "The team was incredibly professional. They cleaned up after the install and explained everything perfectly." },
    { name: "Sarah A.", text: "Joennifex Global delivered exactly what they promised. Consistent, steady power at last!" },
    { name: "Mr. Adebayo", text: "I was skeptical about solar, but their technical expertise turned me into a believer. Great after-sales support." },
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          See Our Impact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {reels.map((r, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} 
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white p-4 rounded-3xl shadow-sm border flex flex-col"
            >
              <div className="w-full aspect-[9/16] overflow-hidden rounded-2xl mb-4">
                <iframe src={r.url} className="w-full h-full" style={{ border: 'none' }} allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
              </div>
              <div className="text-center px-2">
                <p className="text-sm font-bold text-yellow-700 bg-yellow-50 py-2 px-4 rounded-lg inline-flex items-center gap-2">
                  <Zap size={14} /> {r.spec}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h3 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-2xl font-semibold text-center mb-10"
        >
          What Our Clients Are Saying
        </motion.h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {textReviews.map((r, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="italic text-gray-700 flex-grow">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-2 font-bold text-gray-900">
                <Award size={18} className="text-yellow-600" /> {r.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}