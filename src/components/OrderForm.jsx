import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, X, ShoppingCart, CheckCircle } from "lucide-react";
import { generators, panels } from "../data/products";
import * as pixel from "../utils/pixel";

export default function OrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const dropdownRef = useRef(null);
  const allProducts = [...generators, ...panels];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleItem = (product) => {
    setSelectedItems((prev) =>
      prev.find((i) => i.name === product.name)
        ? prev.filter((i) => i.name !== product.name)
        : [...prev, product]
    );
  };

 const total = selectedItems.reduce((sum, item) => {
  // 1. Convert to string
  const priceStr = String(item.price);
  // 2. Remove everything except digits, decimal points, and minus signs
  const cleanPrice = parseFloat(priceStr.replace(/[^0-9.-]+/g, ""));
  // 3. Add to sum if it's a valid number
  return sum + (isNaN(cleanPrice) ? 0 : cleanPrice);
}, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.set('products', selectedItems.map(i => i.name).join(', '));
    formData.set('total_price', total.toString());

    try {
      const response = await fetch(e.target.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });
      if (response.ok) {
        pixel.trackEvent('Lead', { value: total, currency: 'NGN' });
        setSubmitted(true);
        setSelectedItems([]);
      }
    } catch (err) {
      alert("Network error. Please check your connection.");
    }
  };

  return (
    <section id="order" className="py-20 px-6 max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 bg-green-50 rounded-3xl border border-green-100"
          >
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-green-700">Order Placed!</h2>
            <p className="text-gray-600 mt-2">Our team will contact you shortly.</p>
            <button onClick={() => setSubmitted(false)} className="mt-6 text-yellow-600 font-bold underline">Place another order</button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit} action="https://formspree.io/f/mbdbzrda" method="POST"
            className="space-y-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-center">Place Your Order</h2>

            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <label className="block font-bold mb-2">Select Products</label>
              <button type="button" onClick={() => setIsOpen(!isOpen)} className="w-full p-4 border rounded-xl bg-white flex justify-between items-center hover:border-yellow-600 transition">
                {selectedItems.length > 0 ? `${selectedItems.length} item(s) selected` : "Choose your solar setup..."}
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {isOpen && (
                <div className="absolute z-20 w-full mt-2 bg-white border rounded-xl shadow-2xl max-h-60 overflow-y-auto p-2">
                  {allProducts.map((p) => (
                    <label key={p.name} className="flex items-center p-3 hover:bg-yellow-50 rounded-lg cursor-pointer">
                      <input type="checkbox" className="mr-3 accent-yellow-600" checked={!!selectedItems.find(i => i.name === p.name)} onChange={() => toggleItem(p)} />
                      <span className="flex-1 text-sm">{p.name}</span>
                      <span className="font-bold text-sm text-yellow-600">₦{p.price.toLocaleString()}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Items Summary */}
            {selectedItems.length > 0 && (
              <div className="space-y-2">
                {selectedItems.map((item) => (
                  <div key={item.name} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg text-sm">
                    <span>{item.name}</span>
                    <button type="button" onClick={() => toggleItem(item)}><X size={14} className="text-red-500"/></button>
                  </div>
                ))}
              </div>
            )}

            <div className="bg-yellow-500 text-white p-4 rounded-xl font-bold text-lg flex justify-between items-center">
              <span>Total Estimate</span>
              <span>₦{total.toLocaleString()}</span>
            </div>

            {/* Form Fields */}
            {['name', 'phone', 'email', 'address'].map((field) => (
              <input key={field} name={field} type={field === 'email' ? 'email' : 'text'} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none" required />
            ))}

            <button type="submit" className="w-full p-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-yellow-600 transition-all shadow-lg hover:-translate-y-1">
              Confirm Order
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
}