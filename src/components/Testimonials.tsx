import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Khanna",
      role: "Operations Head, Textile Mills",
      content: "Kailashpati Enterprises has been our primary motor supplier for 5 years. Their technical knowledge of Siemens drives helped us reduce downtime by 30%.",
      rating: 5
    },
    {
      name: "Anand Sharma",
      role: "Purchasing Manager, Chemical OEM",
      content: "The fast delivery and genuine price of ABB gearboxes from Kailashpati is unmatched in North India. Highly recommended for industrial bulk supply.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-0 left-0 w-full h-1/2 bg-industrial-gray/50 -z-10 skew-y-3 origin-top-left"></div>

       <div className="max-w-7xl mx-auto px-4">
         <div className="text-center mb-16">
           <Quote size={48} className="text-industrial-accent/20 mx-auto mb-4" />
           <h2 className="text-3xl md:text-4xl font-display font-bold text-industrial-blue">What Our <span className="text-industrial-accent">Partners</span> Say</h2>
         </div>

         <div className="grid md:grid-cols-2 gap-8">
           {testimonials.map((t, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 relative"
             >
               <div className="flex gap-1 mb-6">
                 {[...Array(t.rating)].map((_, i) => (
                   <Star key={i} size={16} className="fill-industrial-accent text-industrial-accent" />
                 ))}
               </div>
               <p className="text-gray-600 italic text-lg leading-relaxed mb-8">"{t.content}"</p>
               <div>
                 <h4 className="font-bold text-industrial-blue text-lg">{t.name}</h4>
                 <p className="text-industrial-accent text-sm font-semibold">{t.role}</p>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
    </section>
  );
};

export default Testimonials;
