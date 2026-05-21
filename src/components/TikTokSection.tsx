import { useEffect } from "react";

const TikTokSection = () => {
  const tiktokVideos = [
    { id: "7532234618116820237", user: "weareforthem" },
    { id: "7530691670971600142", user: "weareforthem" },
    { id: "7528163298643135757", user: "weareforthem" }
  ];

  console.log("TikTokSection loaded with videos:", tiktokVideos);
  console.log("Individual video URLs:");
  tiktokVideos.forEach((video, index) => {
    console.log(`Video ${index + 1}: https://www.tiktok.com/@${video.user}/video/${video.id}`);
  });

  useEffect(() => {
    // Load TikTok embed script
    console.log("Loading TikTok embed script...");
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    
    script.onload = () => {
      console.log("TikTok embed script loaded successfully");
      // Re-process embeds after script loads
      const tiktokEmbed = (window as any).tiktokEmbed;
      if (tiktokEmbed) {
        console.log("TikTok embed function found, processing embeds...");
        tiktokEmbed.lib.render(document);
      } else {
        console.log("TikTok embed function not found on window");
      }
    };
    
    script.onerror = () => {
      console.error("Failed to load TikTok embed script");
    };
    
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount - be defensive about removal
      const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      if (existingScript && existingScript.parentNode) {
        console.log("Removing TikTok embed script");
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-brand-grass">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-brand-grass-foreground mb-4">
            See What Everyone's Talking About
          </h2>
          <p className="text-xl text-brand-grass-foreground/90 max-w-2xl mx-auto font-mono">
            Our zine is making waves on TikTok
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center max-w-7xl mx-auto">
          <div className="md:hidden flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {tiktokVideos.map((video, index) => (
              <div key={index} className="flex-shrink-0 w-96 snap-center">
                <div className="bg-brand-white rounded-2xl p-6 shadow-elegant relative">
                  <blockquote 
                    className="tiktok-embed mx-auto pointer-events-none" 
                    cite={`https://www.tiktok.com/@${video.user}/video/${video.id}`}
                    data-video-id={video.id}
                    data-autoplay={index === 1 ? "true" : "false"}
                    style={{ maxWidth: "100%", minWidth: "350px", margin: "0 auto" }}
                  >
                    <section>
                      <a 
                        target="_blank" 
                        title={`@${video.user}`} 
                        href={`https://www.tiktok.com/@${video.user}/video/${video.id}`}
                        rel="noopener noreferrer"
                        className="pointer-events-none"
                      >
                        View on TikTok
                      </a>
                    </section>
                  </blockquote>
                  <div className="absolute inset-0 bg-transparent" />
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:flex md:flex-row gap-8 items-center justify-center">
            {tiktokVideos.map((video, index) => (
              <div key={index} className="flex-shrink-0 w-96">
                <div className="bg-brand-white rounded-2xl p-6 shadow-elegant mx-auto">
                  <blockquote 
                    className="tiktok-embed mx-auto" 
                    cite={`https://www.tiktok.com/@${video.user}/video/${video.id}`}
                    data-video-id={video.id}
                    data-autoplay={index === 1 ? "true" : "false"}
                    style={{ maxWidth: "100%", minWidth: "350px", margin: "0 auto" }}
                  >
                    <section>
                      <a 
                        target="_blank" 
                        title={`@${video.user}`} 
                        href={`https://www.tiktok.com/@${video.user}/video/${video.id}`}
                        rel="noopener noreferrer"
                      >
                        View on TikTok
                      </a>
                    </section>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default TikTokSection;