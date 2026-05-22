import { useRef, useEffect } from "react";

const videos = [
  { src: "https://zinemedia.forthem.com/stud-aunties-sm.mp4", name: "Stud Aunties", handle: "@timalikesmusic @igobymal" },
  { src: "https://zinemedia.forthem.com/bridget-sm.mp4", name: "Bridget Matloff", handle: "@bridgetmatloff" },
];

const CreatorVideos = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observers = videoRefs.current.map((video) => {
      if (!video) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(video);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="py-10 md:py-16 bg-[#0a0029]">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-4xl font-black text-white text-center mb-6 md:mb-8 font-body3">
          Your Fav Queer Creators Love It
        </h2>
        <div className="flex flex-row gap-3 md:gap-4 items-start justify-center max-w-4xl mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col items-center w-1/2 max-w-[160px] md:max-w-[360px]">
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                src={video.src}
                className="w-full aspect-[9/16] object-cover rounded-xl"
                loop
                muted
                playsInline
                preload="metadata"
              />
              <h3 className="text-brand-grass font-bold text-sm md:text-lg mt-2 md:mt-3 font-body3 text-center">{video.name}</h3>
              <p className="text-white/60 text-xs md:text-sm font-body3 text-center">{video.handle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorVideos;
