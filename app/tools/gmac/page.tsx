'use client'
import Header from '@/components/Header',
import FaqAccordion from '@/components/FaqAccordion',
import VideoPlayer from '@/components/VideoPlayer',
import { Briefcase, Shield, Clock } from 'lucide-react',
import { useState } from 'react'

const features = [
  {
    title: "חיסכון בזמן",
    description: "איסוף אוטומטי של כל התשובות בלחיצת כפתור",
    icon: Clock
  },
  {
    title: "פעולה מהירה",
    description: "שמירת המידע באופן מיידי וללא עיכובים",
    icon: Briefcase
  },
  {
    title: "גיבוי שלם",
    description: "כל המידע נשמר בגוגל שיטס באופן מאובטח",
    icon: Shield
  }
];

const steps = [
  "מוודאים שיש את כל הכלים בהם נוכל לאסוף פרטים בקבוצה שנרצה",
  "מקליקים על הקישור של הקבוצה שלכם בגוגל שיטס",
  "תקבלו אישור על כל חבר שנוסף לקבוצה שלכם",
  "התשובות נשמרות אוטומטית בגוגל שיטס שלכם להמשמרת"
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

export default function GmacPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-indigo-600 to-indigo-900 text-white overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-[gradient_3s_linear_infinite]" />
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                GMAC - שומר התשובות לשאלות הכניסה לקבוצה
                <span className="block text-2xl md:text-3xl text-indigo-200 mt-4 opacity-0 animate-[fadeIn_0.5s_ease-out_0.3s_forwards]">
                  התוסף הפופולרי למנהלי קבוצות מהטופ בלבד
                </span>
              </h1>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
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
            <h2 className="text-3xl font-bold text-center mb-12">למה GMAC?</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12">ראו את GMAC בפעולה</h2>
            <div className="max-w-4xl mx-auto">
              <VideoPlayer videoId="mLnXlkmy84Q" />
            </div>
          </div>
        </section>

        {/* Pricing Section - Add before FAQ section */}
        <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
                <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                  5 ימי ניסיון חינם!
                </div>
                
                <div className="mb-8">
                  <div className="text-gray-500 text-lg mb-2">עלות חודשית:</div>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-3xl font-bold text-indigo-600">₪35</span>
                    <span className="text-lg text-gray-400 line-through">₪55</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                      חיסכון של 36%
                    </span>
                  </div>
                </div>

                <ul className="text-right space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    <span>5 ימי ניסיון ללא עלות</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    <span>ביטול בכל עת</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    <span>ללא התחייבות</span>
                  </li>
                </ul>

                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all w-full md:w-auto"
                >
                  <span>להתחיל עכשיו</span>
                  <i className="fas fa-arrow-left"></i>
                </a>
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
  )
}
