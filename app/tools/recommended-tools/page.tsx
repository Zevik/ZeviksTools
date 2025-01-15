import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RecommendedToolsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Section 1 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">כותרת סקצ'ן ראשון</h2>
            <p className="text-lg text-gray-600 text-center">
              טקסט דמי ראשון. כאן תוכלו להוסיף מידע על הכלים המומלצים שלכם.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">כותרת סקצ'ן שני</h2>
            <p className="text-lg text-gray-600 text-center">
              טקסט דמי שני. כאן תוכלו להמשיך ולהרחיב על היתרונות של הכלים שאתם ממליצים עליהם.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">כותרת סקצ'ן שלישי</h2>
            <p className="text-lg text-gray-600 text-center">
              טקסט דמי שלישי. תוכלו להוסיף קריאה לפעולה או מידע נוסף על איך להשתמש בכלים.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}