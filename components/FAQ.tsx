"use client"; // <--- THIS LINE IS ESSENTIAL TO FIX THE ERROR

import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      q: "What is your approach to treating trauma?",
      a: "I take a warm and grounded approach, using evidence-based methods like EMDR and CBT to help clients move from feeling 'functional' to truly regulated."
    },
    {
      q: "Do you offer in-person sessions in Santa Monica?",
      a: "Yes, I see clients in my quiet, private office located at 123th Street 45 W, Santa Monica, CA 90401."
    },
    {
      q: "Do you provide a superbill for insurance?",
      a: "I am an out-of-network provider, but I can provide a monthly superbill that you can submit to your insurance company for potential reimbursement."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#F9F7F5]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-serif text-[#3E4A59] text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="border-b border-[#EEEAE5] pb-4">
              <button 
                className="w-full flex justify-between items-center py-4 text-left font-medium text-[#3E4A59]"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{item.q}</span>
                <span className="text-[#B07D62] font-bold">{openIndex === index ? '−' : '+'}</span>
              </button>
              
              {openIndex === index && (
                <div className="text-gray-600 pb-4 animate-in fade-in duration-300">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;