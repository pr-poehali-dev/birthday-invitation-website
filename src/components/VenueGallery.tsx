import { AspectRatio } from "@/components/ui/aspect-ratio";

const VenueGallery = () => {
  // Обычно здесь были бы настоящие изображения места проведения
  // Используем placeholder.svg в качестве заглушки
  const images = [
    { src: "/placeholder.svg", alt: "Вид лофта" },
    { src: "/placeholder.svg", alt: "Интерьер" },
    { src: "/placeholder.svg", alt: "Кинозал" },
  ];

  return (
    <div className="animate-fade-in w-full max-w-md">
      <h3 className="text-lg font-medium text-elegant-dark mb-3">Галерея места</h3>
      <div className="grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-md border border-elegant">
            <AspectRatio ratio={1 / 1}>
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover h-full w-full hover:scale-110 transition-transform duration-300"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueGallery;
