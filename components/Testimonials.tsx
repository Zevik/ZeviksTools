'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'תהילה סיטון וזוהרת ניר-כהן',
    role: 'מנהלות קהילת &#39;פודוס - פודי׳ז שומרי כשרות&#39;',
    text: 'אם אתם מנהלי קבוצה...',
    image: '/images/תהילה.png'
  },
  {
    name: 'ANATOLY TOLIK EIDELMAN',
    text: 'לדעתי הבן אדם שהכי מבין בתחום בארץ אבל עדיין לא כולם יודעים את זה 🙂',
    image: '/images/Anatoly.png'
  },
  {
    name: 'RON KIMHI',
    text: 'זאביק הוא בגדול המומחה הכי גדול שפגשתי בכל הקשור לניהול קבוצות הקהילות בפייסבוק...',
    image: '/images/Ron.png'
  },
  {
    name: 'אילנית בניזרי',
    text: 'תרשו לי לפרגן לחבר קבוצה Zevik Aviner זאביק היקר שבזכותו אני כבר לא נחסמת במתן קישורים...',
    image: '/images/אילנית.png'
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        const newScrollLeft = scrollLeft + clientWidth >= scrollWidth ? 0 : scrollLeft + clientWidth;
        scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='py-24 bg-gradient-to-br from-gray-50 to-blue-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-16 animate-fade-in'>
          תודה שהמלצתם עלי
        </h2>
        
        <div 
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto'
          ref={scrollRef}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className='bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300'
            >
              <div className='relative mb-6'>
                <div className='w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-100'>
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
              <blockquote className='text-gray-600 text-center mb-4'>
                {testimonial.text}
              </blockquote>
              <div className='text-center'>
                <cite className='font-semibold text-gray-800 block'>
                  {testimonial.name}
                </cite>
                {testimonial.role && (
                  <span className='text-sm text-gray-500'>{testimonial.role}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
