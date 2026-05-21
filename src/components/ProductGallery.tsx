import { useState } from "react";
import { Upload, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
interface ProductGalleryProps {
  onImageUpload?: (file: File) => void;
}
const ProductGallery = ({
  onImageUpload
}: ProductGalleryProps) => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImages(prev => [...prev, imageUrl]);
      onImageUpload?.(file);
    }
  };
  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };
  const products = [{
    name: "Gay4WNBA Hat",
    description: "Show your love for the game",
    memberPrice: "$24.50",
    regularPrice: "$35.00",
    image: "/lovable-uploads/a3b8d4d4-c363-4ab2-8f0f-81439cbc48f4.png"
  }, {
    name: "Clack Fan",
    description: "Stay cool and look even cooler",
    memberPrice: "$10.50",
    regularPrice: "$15.00",
    image: "/lovable-uploads/06c768a5-3e74-4073-9a18-f3744ed4f386.png"
  }, {
    name: "For Them Bandana",
    description: "Ready for anything",
    memberPrice: "$13.50",
    regularPrice: "$18.00",
    image: "/lovable-uploads/54eee8c2-a6a7-42fd-aa77-1f4086343072.png"
  }, {
    name: "Good Boy Trad Boxer",
    description: "Everything about your favorite boxers, designed with you in mind",
    memberPrice: "$22.40",
    regularPrice: "$32.00",
    image: "https://forthem.com/cdn/shop/files/goodboy_tradboxer_cutout.png?crop=center&height=2374&v=1763662054&width=2374"
  }];
  return <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            + Get Member-Only Limited Drops
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your membership unlocks exclusive access to our limited edition products with 30% savings
          </p>
        </div>

        {/* Upload Section */}
        

        {/* Uploaded Images */}
        {uploadedImages.length > 0 && <div className="mb-8 -mx-4 md:-mx-8 lg:-mx-16">
            <h3 className="text-lg font-semibold mb-4 text-center px-4">Uploaded Images</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {uploadedImages.map((image, index) => <div key={index} className="relative group">
                  <img src={image} alt={`Uploaded ${index + 1}`} className="w-full h-[95vh] object-contain bg-black" />
                  <Button variant="destructive" size="sm" className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 p-0" onClick={() => removeImage(index)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>)}
            </div>
          </div>}

        {/* Products Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto md:justify-center pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {products.map((product, index) => (
            <div key={index} className="flex-shrink-0 w-80 snap-center">
              <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-muted/20">
                {/* Hero Image */}
                <div className="aspect-square relative">
                  {product.image ? (
                    <img src={product.image} alt={product.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-brand-grass/10 flex items-center justify-center">
                      <Upload className="w-12 h-12 text-brand-grass" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-brand-grass text-brand-grass" />
                    <span className="text-xs font-normal font-mono">MEMBERS ONLY</span>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="mb-2 font-normal text-lg font-mono">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm font-body3">{product.description}</p>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground line-through font-mono">{product.regularPrice}</span>
                    <span className="font-black text-brand-grass font-mono text-sm text-primary-foreground">{product.memberPrice}</span>
                    <span className="text-sm font-semibold text-brand-moss">MEMBERS</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-brand-grass/10 border border-brand-grass/20 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg font-bold mb-2 font-body3 uppercase">
              🎁 Member Exclusive Access
            </p>
            <p className="text-muted-foreground font-body3 px-0">
              These products are only available to subscribers<br/>
              with automatic 30% discount
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductGallery;