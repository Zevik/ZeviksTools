const tools = [
  {
    title: ['GMAC', 'איסוף ושמירת תשובות הכניסה לקבוצה'],
    description: 'התוסף הפופולרי שאוסף ושומר את התשובות לשאלות הכניסה לקבוצה שלכם.',
    link: '/tools/gmac'
  },
  {
    title: ['Groups Monitor', 'סקאן-גרופ'],
    description: 'הכלי החזק והיעיל ביותר לניטור קבוצות פייסבוק, עבור עסקים ונותני שירות בפייסבוק!',
    link: '/groups-monitor'
  },
  {
    title: ['Reply Comments', 'מכונת התגובות המבריקה'],
    description: 'התוסף הכי פופולרי! כתבתם פוסט וקיבלתם מאות תגובות? התוסף יגיב לכל התגובות ויתייג את המגיב.',
    link: '/reply-comments'
  }
];

export default function Tools() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            הכלים שלנו
          </h2>
          <p className="text-lg text-gray-600">
            מגוון כלים מתקדמים לניהול יעיל של קבוצות פייסבוק
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <a 
              key={index}
              href={tool.link}
              className="group flex flex-col bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Title with gradient background on hover */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1 text-gray-800 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {tool.title[0]}
                </h3>
                <p className="text-lg text-blue-600 font-medium">
                  {tool.title[1]}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                {tool.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
