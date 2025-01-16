'use client';
import { useState } from 'react';

const faqItems = [
  {
    question: 'האם ניתן לסרוק כל קבוצה?',
    answer: 'אכן, ניתן לסרוק כל קבוצה. על מנת לסרוק קבוצה פרטית יש להצטרף אליה.'
  },
  {
    question: 'האם ניתן לבחור כמה מילות חיפוש שאני רוצה?',
    answer: 'וודאי. וגם ניתן לבחור ולהגדיר מילים שונות עבור כל קבוצה. תוכלו לעשות הגדרות חיפוש חכמות כולל ביטוי מדויק או גמיש, צירופי מילים, הוצאת מילים ועוד.'
  },
  {
    question: 'עם איזה פרופיל פייסבוק התוסף משתמש לסריקה?',
    answer: 'התוסף סורק את הקבוצות בעזרת פרופיל הפייסבוק שמחובר בדפדפן הכרום ולכן ניתן לבחור כל פרופיל פייסבוק וכן להחליף אותו בכל עת.'
  },
  {
    question: 'האם ניתן לשנות את הקבוצות ואת מילות החיפוש מתי שאני רוצה?',
    answer: 'כן! כל ההגדרות נמצאות בגליון גוגלשיטס שלך, שנמצא אצלך.'
  },
  {
    question: 'האם יש סכנה שפייסבוק יחסום אותי?',
    answer: 'אנחנו לא נתקלנו מעולם במקרה כזה. הדבר היחיד שעלול לקרות הוא השעייה זמנית (לכמה שעות) לפעולה הספציפית של פתיחת קבוצת פייסבוק. שאר הפעולות, כמו למשל לגלול בפיד ולכתוב לא יושעו, וגם זה נדיר ביותר וקורה רק אם סורקים ללא הפסקות, ובשביל זה אנחנו מגדירים הפסקות בהגדרות התוסף.'
  },
  {
    question: 'האם המחשב שלי צריך להיות דלוק?',
    answer: 'התוסף פועל על דפדפן הכרום שלכם ועליו להיות פתוח. אם תסגרו את דפדפן הכרום שעליו פועל התוסף או שתכבו את המחשב, התוסף יפסיק לפעול עד שתדליקו את המחשב. ישנה אפשרות להפעיל את התוכנה על מחשב מרוחק, שלי, שפועל 24/7, בתוספת של 100 ש"ח לחודש.'
  },
  {
    question: 'האם ההתראות מגיעות אלינו מיד עם פרסום הפוסט בקבוצה?',
    answer: 'ההתראות אינן מיידיות, משום שלוקח זמן להשלים סבב סריקות וצריך גם זמני המתנה, ולכן עבור פוסט שעלה לקבוצה יתכן ונקבל התראה תוך כמה דקות, או לאחר שעה ויותר, תלוי במספר הקבוצות שאנו סורקים ובהגדרות שלנו.'
  },
  {
    question: 'האם אפשר למחוק שורות מהגוגלשיטס עם התוצאות?',
    answer: 'הפוסטים שמופיעים בגוגלשיטס משמשים עבור התוסף על מנת שלא ירשום אותם בשנית כשיתקל בהם. מחיקה של שורות מהגוגלשיטס תגרום לרישום חוזר עבור אותם פוסטים במידה וימצאו בתחום הזמן שהגדרנו לחיפוש.'
  },
  {
    question: 'כמה ימים אחורה התוסף מאתר פוסטים?',
    answer: 'בהגדרות התוסף ישנה אפשרות להגדיר את מספר הימים שנרצה שהתוסף יגלול אחורה לאיתור פוסטים.'
  },
  {
    question: 'האם ניתן לעשות חיפוש בכל שפה?',
    answer: 'כן.'
  },
  {
    question: 'איך ומתי ניתן לבטל את המנוי?',
    answer: 'המנוי הוא חודשי והוא מתחדש מדי חודש באותו היום שבו התחלתם את המנוי. ניתן לפנות אלי עד 24 שעות לפני חידוש המנוי על מנת לבטלו.'
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
  );
}