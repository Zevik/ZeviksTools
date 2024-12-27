'use client'
import { useState } from 'react'

const faqItems = [
  {
    question: "האם ניתן להשתמש אם התוסף עבור כמה קבוצות שאני מנהל/ת?",
    answer: "כן. ובנוסף, עבור כל קבוצה התוסף יצור קובץ נפרד שאליו ישמרו הנתונים."
  },
  {
    question: 'האם התשובות נאספות באופן אוטומטי לחלוטין?',
    answer: 'לא. יש לאסוף את הנתונים בכל פעם לפני שמאשרים את בקשות ההצטרפות לקבוצה, על ידי לחיצה על כפתור Collect.'
  },
  {
    question: 'אם לוחצים על Collect כמה פעמים, האם הנתונים יופיעו בקובץ כמה פעמים?',
    answer: 'לא. הנתונים נאספים פעם אחת על מנת לא ליצור כפילויות, אלא אם כן אחת התשובות השתנתה ואז הנתונים ירשמו מחדש.'
  },
  {
    question: 'מה יקרה אם אשנה את שאלות הכניסה לקבוצה?',
    answer: 'התוסף יצור עמודות חדשות בגוגלשיטס עם כותרות השאלות החדשות, וירשום את התשובות המתאימות תחתיהן.'
  },
  {
    question: 'האם הנתונים שאספתי יכולים ללכת לאיבוד לאחר סיום המנוי?',
    answer: 'לא! הנתונים נשמרים בגוגלשיטס ששייך למנוי, תחת חשבון הגוגל, ותמיד ניתן למצוא אותו ב: https://drive.google.com'
  },
  {
    question: 'אם אני מבטל/ת את התוסף לאחר 4 ימים, האם יהיה לי חיוב כלשהוא?',
    answer: 'לא! יש 5 ימי ניסיון ללא עלות וללא התחייבות, וניתן לבטל את המנוי לפני היום החמישי ללא כל חיוב.'
  },
  {
    question: 'לאן ישלחו החשבוניות?',
    answer: 'החשבוניות נשלחות באופן אוטומטי לאימייל שאיתו נרשמתם שזהו אותו אימייל של חשבון הכרום תחתיו התקנתם את התוסף. לא ניתן להחליף את האימייל לקבלת חשבונית ללא החלפה של חשבון הכרום שעליו התוסף מותקן ותחתיו חשבון הפייסבוק שלכם פעיל.'
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div 
          key={index}
          className="bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-indigo-100 transition-all duration-500 ease-in-out"
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
            style={{ 
              maxHeight: openIndex === index ? '1000px' : '0',
              opacity: openIndex === index ? 1 : 0,
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            className="overflow-hidden"
          >
            <div 
              className={`px-8 pb-6 text-gray-600 transform transition-all duration-700 ease-in-out ${
                openIndex === index ? 'translate-y-0' : '-translate-y-4'
              }`}
            >
              <p className="leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}