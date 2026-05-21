import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import starsDivider from "@/assets/stars-divider.png";

const LimitedDrops = () => {
  const products = [
    {
      name: "Gay4WNBA Hat",
      description: "Show your love for the game",
      memberPrice: "$24.50",
      regularPrice: "$35.00",
      image: "/lovable-uploads/c0c16495-9818-4d77-bbc7-880970246925.png",
    },
    {
      name: "Clack Fan",
      description: "Stay cool and look even cooler with your very own For Them clack fan",
      memberPrice: "$10.50",
      regularPrice: "$15.00",
      image: "/lovable-uploads/54eee8c2-a6a7-42fd-aa77-1f4086343072.png",
    },
    {
      name: "For Them Bandana",
      description: "Ready for anything",
      memberPrice: "$13.50",
      regularPrice: "$18.00",
      image: "/lovable-uploads/a3b8d4d4-c363-4ab2-8f0f-81439cbc48f4.png",
    },
    {
      name: "Good Boy Trad Boxer",
      description: "Everything about your favorite boxers, designed with you in mind",
      memberPrice: "$22.40",
      regularPrice: "$32.00",
      image: "https://forthem.com/cdn/shop/files/goodboy_tradboxer_cutout.png?crop=center&height=2374&v=1763662054&width=2374",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 uppercase tracking-tight">
            Limited Member Drops
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-2 font-mono">
            Exclusive products with 30% savings
          </p>
          <p className="text-sm text-muted-foreground font-black uppercase tracking-widest">
            Members Only
          </p>
          <img src={starsDivider} alt="" loading="lazy" decoding="async" className="mx-auto mt-4 h-5 opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
          <div className="md:hidden flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {products.map((product, index) => (
              <div key={index} className="flex-shrink-0 w-80 snap-center">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="hidden md:contents">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="overflow-hidden bg-card border-2 border-brand-black rounded-none hover-scale">
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-brand-grass px-3 py-1 flex items-center gap-1.5 rounded-none">
            <Star className="w-3.5 h-3.5 fill-brand-grass-foreground text-brand-grass-foreground" strokeWidth={2.5} />
            <span className="text-xs font-black uppercase tracking-wider text-brand-grass-foreground">Members Only</span>
          </div>
        </div>
        <div className="aspect-square bg-muted/50 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-black text-card-foreground mb-2 uppercase tracking-tight">
          {product.name}
        </h3>
        <p className="text-muted-foreground mb-4 font-body3">{product.description}</p>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-black text-brand-grass">{product.memberPrice}</span>
          <span className="text-lg text-muted-foreground line-through">{product.regularPrice}</span>
          <span className="text-xs font-black text-issue-01 uppercase tracking-wider bg-issue-01/10 px-2 py-0.5">
            MEMBERS
          </span>
        </div>
        <Button className="w-full rounded-none font-black uppercase tracking-wide">Add to Cart</Button>
      </CardContent>
    </Card>
  );
};
export default LimitedDrops;