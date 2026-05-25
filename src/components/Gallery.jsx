import { motion } from 'framer-motion';
import { Zap, CheckCircle, ShieldCheck } from 'lucide-react';
import { generators, panels } from '../data/products';

export default function Gallery() {
  const firstGroup = generators.slice(0, 2);
  const secondGroup = generators.slice(2);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="products" className="py-20 px-6 bg-white">
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        className="text-4xl font-bold text-center mb-16"
      >
        Our Solar Catalog
      </motion.h2>
      
      <motion.h3 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        className="text-2xl font-semibold mb-8 text-yellow-700 text-center"
      >
        Solar Generators
      </motion.h3>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
        {firstGroup.map((p, i) => <ProductCard key={i} {...p} />)}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto justify-items-center">
        {secondGroup.map((p, i) => <ProductCard key={i} {...p} />)}
      </div>

      <motion.h3 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        className="text-2xl font-semibold mb-8 text-yellow-700 text-center"
      >
        Solar Panels
      </motion.h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center">
        {panels.map((p, i) => <ProductCard key={i} {...p} />)}
      </div>

      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        className="max-w-4xl mx-auto mt-20 bg-gray-50 p-8 rounded-3xl border"
      >
        <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          <ShieldCheck className="text-yellow-600" /> Quality Installations
        </h3>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src="/Hero_pic1.jpeg" alt="Installation" className="rounded-xl shadow-md" />
          <p className="text-gray-600">We don't just sell products; we engineer energy independence. Our team ensures every system is installed with precision for maximum durability.</p>
        </div>
      </motion.div>
    </section>
  );
}

function ProductCard({ name, price, img, power, details }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-xl transition flex flex-col w-full max-w-sm"
    >
      <img src={img} alt={name} className="w-full h-48 object-contain mb-4" />
      <h4 className="font-bold text-lg">{name}</h4>
      <p className="text-sm font-semibold text-yellow-700 mt-1 mb-3 flex items-center gap-1">
        <Zap size={14} /> {power}
      </p>
      <ul className="text-sm text-gray-600 mb-6 space-y-1">
        {details.map((d, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle size={14} className="text-green-500" /> {d}
          </li>
        ))}
      </ul>
      <p className="text-2xl font-bold text-gray-900 mt-auto mb-4">₦{price.toLocaleString()}</p>
      <a href={`#order?product=${encodeURIComponent(name)}`} className="block w-full text-center py-3 bg-gray-900 text-white rounded-lg hover:bg-yellow-600 transition">Reserve My Kit</a>
    </motion.div>
  );
}