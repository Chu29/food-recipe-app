import { useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Edit, Heart } from "lucide-react";
import { RecipeMetaRow } from "../molecules";

const RecipeCard = ({ data, onToggleFavorite, onEdit, onOpenDetails }) => {
  const { image, name, servings, prepTimeMinutes, rating, isFavorite } = data;
  const touchStartX = useRef(null);

  const images = useMemo(() => {
    if (Array.isArray(data.images) && data.images.length > 0) {
      return data.images;
    }

    if (image) {
      return [image];
    }

    return ["https://via.placeholder.com/640x360?text=No+Image"];
  }, [data.images, image]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const activeImageIndex = Math.min(currentImageIndex, images.length - 1);

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    const endX = event.changedTouches[0]?.clientX;
    if (touchStartX.current == null || endX == null) {
      return;
    }

    const deltaX = endX - touchStartX.current;
    const swipeThreshold = 40;

    if (Math.abs(deltaX) < swipeThreshold) {
      return;
    }

    if (deltaX > 0) {
      showPreviousImage();
    } else {
      showNextImage();
    }
  };

  return (
    <div
      className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:transform cursor-pointer group"
      onClick={() => onOpenDetails?.(data)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpenDetails?.(data);
        }
      }}
      aria-label={`Open details for ${name}`}
    >
      <div
        className="relative overflow-hidden h-48"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[activeImageIndex]}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-gray-900/70 text-white flex items-center justify-center hover:bg-gray-900"
              aria-label="Show previous recipe image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-gray-900/70 text-white flex items-center justify-center hover:bg-gray-900"
              aria-label="Show next recipe image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-gray-900/60 px-2 py-1">
              {images.map((_, index) => (
                <button
                  key={`${data.id}-dot-${index}`}
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${
                    index === activeImageIndex
                      ? "bg-orange-400"
                      : "bg-gray-400/80"
                  }`}
                  aria-label={`Show image ${index + 1} for ${name}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="flex gap-2 absolute bottom-3 left-3">
          <button
            type="button"
            className={`z-10 w-10 h-10 bg-gray-900/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-200 cursor-pointer ${
              isFavorite ? "text-red-500" : "text-gray-300 hover:text-red-500"
            }`}
            onClick={(event) => {
              event.stopPropagation();
              onToggleFavorite?.(data.id);
            }}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
          </button>
          <button
            type="button"
            className="z-10 w-10 h-10 bg-gray-900/70 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:bg-gray-900 transition-all duration-200 cursor-pointer"
            onClick={(event) => {
              event.stopPropagation();
              onEdit?.(data);
            }}
            aria-label="Edit recipe"
          >
            <Edit className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
          {name}
        </h2>

        <RecipeMetaRow
          servings={servings}
          prepTimeMinutes={prepTimeMinutes}
          rating={rating}
        />
      </div>
    </div>
  );
};

export default RecipeCard;
