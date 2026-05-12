import { useEffect, useMemo, useState } from "react";
import {
  MealDetailHeader,
  MealImageCarousel,
  MealMetaGrid,
  MealTextSection,
} from "./molecules";

const MealDetail = ({ recipe, isOpen, onClose }) => {
  const images = useMemo(() => {
    if (!recipe) {
      return [];
    }

    if (Array.isArray(recipe.images) && recipe.images.length > 0) {
      return recipe.images;
    }

    if (recipe.image) {
      return [recipe.image];
    }

    return [];
  }, [recipe]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const currentImageIndex = Math.min(activeImageIndex, images.length - 1);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!recipe) {
    return null;
  }

  const ingredients = Array.isArray(recipe.ingredients)
    ? recipe.ingredients
    : [];
  const instructions = Array.isArray(recipe.instructions)
    ? recipe.instructions
    : [];

  const goToPreviousImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={`fixed inset-0 z-130 bg-black/50 transition-opacity duration-200 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto border-l border-gray-700 bg-gray-900 text-gray-100 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${recipe.name} details`}
      >
        <MealDetailHeader title={recipe.name} onClose={onClose} />

        <div className="p-5 space-y-6">
          <MealImageCarousel
            images={images}
            currentImageIndex={currentImageIndex}
            title={recipe.name}
            onPrevious={goToPreviousImage}
            onNext={goToNextImage}
            onSelect={setActiveImageIndex}
          />

          <MealMetaGrid
            servings={recipe.servings}
            prepTimeMinutes={recipe.prepTimeMinutes}
            rating={recipe.rating}
          />

          <MealTextSection
            title="Ingredients"
            items={ingredients}
            emptyMessage="No ingredients provided."
          />

          <MealTextSection
            title="Instructions"
            items={instructions}
            ordered
            emptyMessage="No instructions provided."
          />
        </div>
      </aside>
    </div>
  );
};

export default MealDetail;
