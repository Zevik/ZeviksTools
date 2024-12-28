import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">צרו קשר</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-s-4">
              <a 
                href="https://wa.me/972546609385"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-3 w-52 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <i className="fab fa-whatsapp ml-2"></i>
                ליצירת קשר בוואטסאפ
              </a>
              <a 
                href="mailto:fb.tools.zevik@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 w-52 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                <i className="far fa-envelope ml-2"></i>
                ליצירת קשר באימייל
              </a>
            </div>
          </div>
          <div className="social-buttons mb-4">
            <a href="#" className="text-white mx-2 text-2xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white mx-2 text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <p>© 2024 Zevik&apos;s Tools</p>
          <p>כל הזכויות שמורות ל-&apos;זאביק&apos; Tools.</p>
        </div>
      </div>
    </footer>
  );
}
