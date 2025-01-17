'use client';

import Header from '@/components/Header';
import FaqAccordion from '@/components/FaqAccordion';
import VideoPlayer from '@/components/VideoPlayer';
import { Briefcase, Shield, Clock } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    title: 'חיסכון בזמן',
    description: 'שבועות של חיפוש הופכות לדקות.',
    icon: Clock
  },
  {
    title: 'פעולה מהירה',
    description: 'לא מפספסים אף הזדמנות עסקית.',
    icon: Briefcase
  },
  {
    title: 'גיבוי מושלם',
    description: 'אוטומציה חכמה\nהטכנולוגיה עובדת בשבילכם 24/7.',
    icon: Shield
  }
];

const steps = [
  'בחרו את מילות החיפוש ואת הקבוצות שתרצו.',
  'התוסף יסרוק את הקבוצות 24/7 במקומכם.',
  'כל פוסט רלוונטי יועבר ישירות ל- GoogleSheets שלכם.',
  'התראות חכמות: קבלו עדכון למייל על כל פוסט חדש.'
];

function CopyEmailButton() {
  const email = 'fb.tools.zevik@gmail.com';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all relative"
    >
      <i className="far fa-envelope text-xl"></i>
      {copied ? (
        <span className="animate-fade-in">הכתובת הועתקה!</span>
      ) : (
        <>
          <span>העתק כתובת אימייל</span>
          <span className="text-sm opacity-75 absolute -bottom-6 right-0 left-0">
            {email}
          </span>
        </>
      )}
    </button>
  );
}

export default function GroupsMonitorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-900/90 to-purple-900/90 text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                סורקת קבוצות מוצאת לקוחות - GroupsMonitoring
                <span className="block text-2xl md:text-3xl text-indigo-200 mt-4 opacity-0 animate-[fadeIn_0.5s_ease-out_0.3s_forwards]">
                  הכלי החזק ביותר לניטור קבוצות פייסבוק, עבור עסקים ונותני שירות
                </span>
              </h1>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">איך התוסף עובד</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <p className="text-lg">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">למה GroupsMonitoring?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((Feature, index) => (
                <div key={index} className="text-center p-6">
                  <Feature.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{Feature.title}</h3>
                  <p className="text-gray-600">{Feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Demo */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">GroupsMonitoring בפעולה</h2>
            <div className="max-w-4xl mx-auto">
              <VideoPlayer videoId="-geuXKKxWSg" />
            </div>
          </div>
        </section>

        {/* Chrome Installation Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">התקנה בדפדפן הכרום</h2>
            <p className="text-lg text-gray-600 mb-4">התקינו את התוסף בקליק אחד</p>
            <a 
              href="https://chromewebstore.google.com/detail/groupsmonitoring/hhkacbdgmmhlbfkfmlddnbaimkopgibk?authuser=0&hl=en-GB" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              התקנה
            </a>
          </div>
        </section>

        {/* Pricing Section - Redesigned */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center">
              <div className="border border-gray-300 rounded-lg p-8 shadow-md">
                {/* Updated monthly cost */}
                <div className="mb-6">
                  <div className="text-gray-800 text-lg mb-2">עלות חודשית:</div>
                  <div className="flex items-baseline justify-center gap-4">
                    <span className="text-4xl font-bold text-black">₪349</span>
                  </div>
                </div>

                {/* Updated features */}
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    <span>ביטול בכל עת</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    <span>ללא התחייבות</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">שאלות נפוצות</h2>
            <div className="max-w-3xl mx-auto">
              <FaqAccordion />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-indigo-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">רוצים להתחיל?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/972546609385"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all"
              >
                <i className="fab fa-whatsapp text-xl"></i>
                ליצירת קשר בוואטסאפ
              </a>
              <CopyEmailButton />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}