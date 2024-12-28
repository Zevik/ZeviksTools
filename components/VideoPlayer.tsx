interface VideoPlayerProps {
  videoId: string;
}

export default function VideoPlayer({ videoId }: VideoPlayerProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-gray-900">
      {/* 16:9 Aspect Ratio */}
      <div className="pt-[56.25%] relative">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title="GMAC הדגמת התוכנה"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />;
      </div>
      
      {/* Loading Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 pointer-events-none" />
    </div>
  );
}
