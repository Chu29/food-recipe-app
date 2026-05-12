import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselDot } from "../atoms";

const MealImageCarousel = ({
  images,
  currentImageIndex,
  title,
  onPrevious,
  onNext,
  onSelect,
}) => {
  const hasMultipleImages = images.length > 1;

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-700">
      <img
        src={images[currentImageIndex]}
        alt={title}
        className="h-64 w-full object-cover"
      />

      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={onPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
            aria-label="Previous detail image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
            aria-label="Next detail image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/50 px-2 py-1">
            {images.map((_, index) => (
              <CarouselDot
                key={`detail-dot-${index}`}
                isActive={currentImageIndex === index}
                onClick={() => onSelect(index)}
                ariaLabel={`Show detail image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MealImageCarousel;
