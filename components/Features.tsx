const features = [
  {
    title: 'מהירות וחיסכון בזמן',
    description: 'אוטומציה חכמה שחוסכת שעות של עבודה ידנית',
    icon: '⚡'
  },
  {
    title: 'בטיחות מירבית',
    description: 'עבודה בקצב מותאם למניעת חסימות מפייסבוק',
    icon: '🛡️'
  },
  {
    title: 'דיוק ויעילות',
    description: 'כלים חכמים שמבצעים את העבודה בצורה מדויקת',
    icon: '🎯'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">התוכנות והתוספים</h2>
          <p className="text-lg text-gray-600 leading-relaxed animate-fade-up">
            איך תכתבו 200 תגובות לתגובות לפוסט, בלי לבזבז שעות ובלי לחטוף ברקסים מפייסבוק?
            איך תשמרו את שאלות הכניסה לקבוצה בלחיצת כפתור? 
            איך תקבלו התראות על לידים מקבוצות פייסבוק שתרצו?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:bg-gradient-to-br from-blue-50 to-indigo-50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl mb-4 transform transition-transform hover:scale-110 duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
