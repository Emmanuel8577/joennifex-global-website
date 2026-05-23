import { useState, useEffect, useRef } from "react";
import { generators, panels } from "../data/products";
import * as pixel from "../utils/pixel";

export default function OrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const dropdownRef = useRef(null);
  const allProducts = [...generators, ...panels];

  // Close dropdown when clicking outside
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
        : [...prev, product],
    );
  };

  const total = selectedItems.reduce((sum, item) => {
    const cleanPrice = parseFloat(String(item.price).replace(/[^0-9.-]+/g, ""));
    return sum + (isNaN(cleanPrice) ? 0 : cleanPrice);
  }, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Prepare data
    const formData = new FormData(e.target);
    formData.set('products', selectedItems.map(i => i.name).join(', '));
    formData.set('total_price', total.toString()); // Ensure it is a string

    try {
      const response = await fetch(e.target.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      const result = await response.json();
      
      if (response.ok) {
        pixel.trackEvent('Lead', { value: total, currency: 'NGN' });
        setSubmitted(true);
        setSelectedItems([]);
      } else {
        console.error("Formspree Error:", result);
        alert("Form error: " + (result.error || "Please check your inputs."));
      }
    } catch (err) {
      console.error("Network Error:", err);
      alert("Network error. Please check your internet connection.");
    }
  };

  return (
    <section id="order" className="py-20 px-6 max-w-xl mx-auto">
      {submitted ? (
        <div className="text-center p-12 bg-green-50 rounded-3xl">
          <h2 className="text-3xl font-bold text-green-700">Order Placed!</h2>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-yellow-600 font-bold underline"
          >
            Place another
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xqejlajd"
          method="POST"
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Place Your Order
          </h2>

          <div className="relative" ref={dropdownRef}>
            <label className="block font-bold mb-2">Select Products:</label>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-full p-4 border rounded-xl bg-white text-left flex justify-between items-center"
            >
              {selectedItems.length > 0
                ? `${selectedItems.length} product(s) selected`
                : "Select products..."}
              <span>{isOpen ? "▲" : "▼"}</span>
            </button>

            {isOpen && (
              <div className="absolute z-20 w-full mt-2 bg-white border rounded-xl shadow-xl max-h-60 overflow-y-auto p-2">
                {allProducts.map((p) => (
                  <label
                    key={p.name}
                    className="flex items-center p-3 hover:bg-yellow-50 cursor-pointer border-b"
                  >
                    <input
                      type="checkbox"
                      className="mr-3 accent-yellow-600"
                      checked={!!selectedItems.find((i) => i.name === p.name)}
                      onChange={() => toggleItem(p)}
                    />
                    <span className="flex-1">{p.name}</span>
                    <span className="font-bold text-sm text-yellow-600">
                      ₦{p.price.toLocaleString()}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl font-bold text-lg border border-yellow-200">
            Total Estimate: ₦{total.toLocaleString()}
          </div>

          <input
            name="name"
            placeholder="Full Name"
            className="w-full p-4 border rounded-xl"
            required
          />
          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full p-4 border rounded-xl"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full p-4 border rounded-xl"
            required
          />
          <textarea
            name="address"
            placeholder="Delivery Address"
            className="w-full p-4 border rounded-xl h-24"
            required
          />

          <button
            type="submit"
            className="w-full p-4 bg-yellow-600 text-white rounded-xl font-bold hover:bg-yellow-700"
          >
            Submit Order
          </button>
        </form>
      )}
    </section>
  );
}
