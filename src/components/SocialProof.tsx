import starReview from "@/assets/star-review.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Alex",
      content: "The membership pays for itself with the 30% discount alone. Getting the magazine free is just a bonus!",
    },
    {
      name: "Jordan",
      content: "Finally, physical print media FOR US made by real artists, writers and journalists.",
    },
    {
      name: "Sam",
      content: "I was buying every magazine anyway. The membership saved me money and gave me so much more. No brainer.",
    },
    {
      name: "Candice I.",
      content: "Exactly what a lot of us need right now. Jam packed with all the spice and depth and fun I look for in queer media. It feels lovely to be reading something where we are at the center instead of off on the sidelines.",
    },
    {
      name: "Lainey W.",
      content: "Got a subscription for my wife's birthday, it's awesome to have a hard copy of queer media. Looking forward to the next one!",
    },
    {
      name: "Lorena",
      content: "Gorgeous piece of work! Total art. I'm so impressed with the quality and the creativity. We love you for putting this out and as fellow artists we say Bravo.",
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-destructive">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            What Members Are Saying
          </h2>
        </div>

        <Carousel
          className="w-full max-w-6xl mx-auto"
          opts={{ loop: true, align: "start" }}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3">
                <div className="bg-white rounded-none p-5 border border-stone-300 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="uppercase tracking-wide font-mono font-extralight text-xs text-destructive">
                      {testimonial.name}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src={starReview} alt="star" loading="lazy" decoding="async" className="w-4 h-4" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-body3 italic text-sm flex-1">
                    "{testimonial.content}"
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white text-destructive border-none hover:bg-white/80" />
          <CarouselNext className="bg-white text-destructive border-none hover:bg-white/80" />
        </Carousel>
      </div>
    </section>
  );
};
export default SocialProof;
