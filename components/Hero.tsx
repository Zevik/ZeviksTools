export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gray-900 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"
        style={{
          backgroundImage: 'url("/images/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />;
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            הכלים והתוכנות המתקדמים ביותר
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              לבעלי עסקים ומנהלי קבוצות
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2 animate-fade-up">
            לאיתור ולביצוע פעולות אוטומטיות בפייסבוק
          </p>
          {/* Remove Buttons */}
        </div>
      </div>
    </section>
  );
}
