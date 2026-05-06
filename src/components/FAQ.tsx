import React from 'react';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      q: "Which brands of electric motors do you supply?",
      a: "We are authorized traders for Crompton, Siemens, ABB, and Bharat Bijlee motors, covering all efficiency classes (IE1, IE2, IE3, IE4)."
    },
    {
      q: "Do you provide pan-India delivery?",
      a: "Yes, we ship industrial products across India from our logistics hub in Ghaziabad. We partner with reliable transport networks for safe delivery."
    },
    {
      q: "Can you help with technical selection of gearboxes?",
      a: "Absolutely. Our engineering team can help you calculate torque requirements and select the appropriate gear ratio for your specific application."
    },
    {
      q: "Do you offer competitive pricing for bulk OEM orders?",
      a: "Yes, we specialize in B2B bulk supply and offer tiered pricing structures for OEMs and large manufacturing plants."
    }
  ];

  return (
    <section className="py-24 bg-industrial-gray">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-industrial-blue mb-12">
          Frequently Asked <span className="text-industrial-accent">Questions</span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-industrial-blue">{faq.q}</span>
                {openIndex === idx ? <Minus className="text-industrial-accent" /> : <Plus className="text-industrial-accent" />}
              </button>
              
              <motion.div 
                initial={false}
                animate={{ height: openIndex === idx ? 'auto' : 0, opacity: openIndex === idx ? 1 : 0 }}
                className="px-6 pb-6 text-gray-500 text-sm leading-relaxed overflow-hidden"
              >
                {faq.a}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
