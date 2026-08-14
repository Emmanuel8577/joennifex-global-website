import { motion } from "framer-motion";
import { Star, Zap, Quote, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const reels = [
    {
      url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2Freel%2F815334467803663%2F&show_text=0",
      spec: "5KVA Inverter, 200Ah Lithium, 4 x 550W Panels",
      title: "Residential Power Solution",
    },
    {
      url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2Freel%2F798227659478444%2F&show_text=0",
      spec: "3.5KVA Inverter, 2 x 200Ah Gel, 2 x 450W Panels",
      title: "Compact Home Setup",
    },
    {
      // Using explicit width/height parameters forces Facebook to render the player feed correctly
      url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2Freel%2F1522982375760950%2F&show_text=0&width=260&height=360",
      spec: "15KWh Lithium & 11KVA Hybrid Inverter + CCTV Network",
      title: "Commercial & Security Rig",
    },
  ];

  const textReviews = [
    {
      name: "John D.",
      location: "Lagos",
      text: "The team was incredibly professional. They cleaned up after the install and explained everything perfectly.",
      verified: true,
    },
    {
      name: "Sarah A.",
      location: "Abuja",
      text: "Joennifex Global delivered exactly what they promised. Consistent, steady power at last!",
      verified: true,
    },
    {
      name: "Mr. Adebayo",
      location: "Ibadan",
      text: "I was skeptical about solar, but their technical expertise turned me into a believer. Great after-sales support.",
      verified: true,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <ShieldCheck size={14} /> Proven Results
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            See Our Systems in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-lg text-slate-600"
          >
            Real installations, real energy freedom. Browse through our recent
            project field walk-throughs.
          </motion.p>
        </div>

        {/* Video Reels Mockup Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 items-stretch">
          {reels.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col justify-between group h-full"
            >
              {/* Smartphone Framed Container */}
              <div className="relative mx-auto w-full max-w-[260px] bg-slate-900 rounded-[2.5rem] p-2.5 shadow-2xl ring-1 ring-slate-900/10 mb-6">
                {/* Phone Notch/Camera */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></div>
                </div>

                {/* Video Display Container */}
                <div className="relative w-full h-[360px] overflow-hidden rounded-[2rem] bg-black">
                  <iframe
                    src={r.url}
                    className="w-full h-full border-0 rounded-[2rem]"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title={r.title}
                  ></iframe>
                </div>
              </div>

              {/* Specification Specs Card */}
              <div className="bg-slate-50 group-hover:bg-amber-50/60 transition-colors p-3.5 rounded-2xl border border-slate-100 text-left mt-auto">
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 bg-amber-500 text-white rounded-lg shrink-0 mt-0.5 shadow-sm">
                    <Zap size={15} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider block">
                      System Specs
                    </span>
                    <p className="text-xs font-medium text-slate-800 leading-relaxed mt-0.5">
                      {r.spec}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Text Reviews Header */}
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-slate-900"
          >
            Trusted by Homeowners & Businesses
          </motion.h3>
        </div>

        {/* Reviews Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {textReviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md border border-slate-200/80 flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 text-slate-100 w-10 h-10 pointer-events-none" />

              <div>
                <div className="flex text-amber-400 gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed relative z-10">
                  "{r.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    {r.name}
                    {r.verified && (
                      <CheckCircle2 size={14} className="text-emerald-500" />
                    )}
                  </h4>
                  <p className="text-xs text-slate-400">{r.location}</p>
                </div>
                <span className="text-[10px] font-medium bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
                  Verified Client
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}