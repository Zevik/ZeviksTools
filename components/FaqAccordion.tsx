'use client';
import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqItems: FaqItem[];
}

export default function FaqAccordion({ faqItems }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div 
          key={index}
          className="bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-indigo-100 transition-all duration-500 ease-in-out max-w-full"
        >
          <button
            className="w-full px-8 py-6 text-right flex items-center justify-between group"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-medium text-lg text-gray-700 group-hover:text-indigo-600 transition-colors duration-300 ease-in-out">
              {item.question}
            </span>
            <i className={`fas fa-chevron-down text-gray-400 transition-all duration-700 ease-in-out transform ${
              openIndex === index ? 'rotate-180 text-indigo-500' : ''
            } group-hover:text-indigo-400`}></i>
          </button>
          
          <div 
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-500 ease ${
              openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-8 py-4 text-gray-700">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}