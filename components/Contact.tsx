export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">צרו קשר</h2>
          
          {/* Contact Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            <a 
              href="https://wa.me/972546609385"
              className="group flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg font-medium transition-all transform hover:scale-105"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              ליצירת קשר בוואטסאפ
            </a>
            <a 
              href="mailto:fb.tools.zevik@gmail.com"
              className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-medium transition-all transform hover:scale-105"
            >
              <i className="far fa-envelope text-2xl"></i>
              ליצירת קשר באימייל
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-2xl hover:text-blue-400 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-2xl hover:text-blue-400 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

          {/* Email Input */}
          <div className="flex justify-center mb-8">
            <input
              placeholder="הכנס 'דוא\"ל' כאן"
              className="px-4 py-2 rounded-lg text-black"
            />
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Zevik's Tools. כל הזכויות שמורות.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
