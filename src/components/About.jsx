import { motion } from 'framer-motion';
import { ShieldCheck, Headset, Settings, CheckCircle } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 px-6 bg-white overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Title Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-sm font-bold text-yellow-600 tracking-widest uppercase mb-2">About Us</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Expert-Led Energy Solutions</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img 
            variants={itemVariants}
            src="/Solarp.jpeg" 
            alt="Expert Solar Installation" 
            className="rounded-3xl shadow-2xl w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]" 
          />
          
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-600 text-justify text-lg leading-relaxed">
              At <strong>Joennifex Global Tech Ltd</strong>, we don't just sell solar products; we engineer complete energy independence. 
              Our mission is to eliminate power instability for homes and businesses through precision-engineered, durable, and cost-effective solar technology.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900">Why Partner With Us?</h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="text-yellow-600 shrink-0" /> 
                  <span><strong>Certified Engineering:</strong> Adherence to global safety and durability standards in every installation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Headset className="text-yellow-600 shrink-0" /> 
                  <span><strong>Post-Installation Support:</strong> Dedicated technical teams to ensure your system runs optimally long-term.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Settings className="text-yellow-600 shrink-0" /> 
                  <span><strong>Custom Tailored Designs:</strong> Systems specifically calculated for your unique load and power requirements.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}