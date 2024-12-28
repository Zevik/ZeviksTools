interface ToolCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ToolCard({ icon, title, description }: ToolCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-4xl mb-4 transform transition-transform hover:scale-110">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-blue-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 opacity-0 hover:opacity-100 transition-opacity">
        <button className="text-blue-500 hover:text-blue-700">
          למד עוד →
        </button>;
      </div>
    </div>
  )
}
