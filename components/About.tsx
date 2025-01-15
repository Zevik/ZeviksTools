import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition-all duration-300">
            {/* Profile Image */}
            <div className="text-center mb-12">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full p-1">
                <div className="rounded-full overflow-hidden w-full h-full bg-white">
                  <Image 
                    src="/images/zevik.jpg" 
                    alt="זאביק אבינר"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover filter hover:brightness-110 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6 text-center leading-relaxed text-gray-600">
              <h2>מי אני</h2>
              <p className="animate-fade-up [animation-delay:200ms]">
                שמי &apos;זאביק&apos; אבינר ואני מנהל כמה מקבוצות הפייסבוק הגדולות בישראל. אני איש של יעילות והזמן שלי ושלכם יקר לי. לכן, אני וצוות מתכנתים, פיתחנו תוכנות לכל פעולה או צורך בפייסבוק ע&quot;מ לחסוך המון זמן והרבה אנרגיה.
              </p>
              <p className="animate-fade-up [animation-delay:400ms]">
                הכלים נולדו מתוך מחקר רב שנים, ומתוך צרכים של בעלי עסקים, משרדי דיגיטל ומנהלי קבוצות פייסבוק.
                הכלים פשוטים מאוד לתפעול ומסוגלים לבצע מגוון פעולות גדול מאוד!
              </p>
              <p className="animate-fade-up [animation-delay:600ms]">
                בנוסף, אם נתקלתם בצורך שאין לו פתרון פה, אתם מוזמנים לפנות אלי, ואנסה לענות לכם על הצורך.
              </p>
            </div>

            {/* Contact Button */}
            <div className="mt-10 text-center">
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 scroll-smooth"
              >
                <span>צרו קשר</span>
                <i className="fas fa-arrow-left mr-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
