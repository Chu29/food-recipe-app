import { useEffect, useState } from "react";
import { useFoodContext } from "../../hooks/useFoodContext";
import { TextInput, TextArea } from "../atoms";
import { FormField, ModalHeader, FormActions } from "../molecules";

const fileToDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Failed to read image file."));
    reader.readAsDataURL(file);
  });

const getInitialFormData = (recipe) => ({
  foodName: recipe?.name ?? "",
  images: Array.isArray(recipe?.images)
    ? recipe.images.join(", ")
    : recipe?.image || "",
  servings: recipe?.servings?.toString?.() ?? "",
  prepTimeMinutes: recipe?.prepTimeMinutes?.toString?.() ?? "",
  rating: recipe?.rating?.toString?.() ?? "",
  ingredients: Array.isArray(recipe?.ingredients)
    ? recipe.ingredients.join("\n")
    : "",
  instructions: Array.isArray(recipe?.instructions)
    ? recipe.instructions.join("\n")
    : "",
});

const AddRecipeModal = ({ onClose, recipeToEdit = null }) => {
  const { addRecipe, updateRecipe } = useFoodContext();
  const [formData, setFormData] = useState(getInitialFormData(recipeToEdit));
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadError, setUploadError] = useState("");
  const isEditing = Boolean(recipeToEdit);

  useEffect(() => {
    setFormData(getInitialFormData(recipeToEdit));
    setUploadedImages([]);
    setUploadError("");
  }, [recipeToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = async (event) => {
    const imageFiles = Array.from(event.target.files || []);
    if (imageFiles.length === 0) {
      return;
    }

    setUploadError("");

    try {
      const dataUrls = await Promise.all(
        imageFiles.map((file) => fileToDataUrl(file)),
      );

      setUploadedImages((prev) => [...prev, ...dataUrls]);
    } catch {
      setUploadError("Could not upload one or more images. Please try again.");
    } finally {
      // Reset the input so selecting the same file again still triggers change.
      event.target.value = "";
    }
  };

  const handleRemoveUploadedImage = (indexToRemove) => {
    setUploadedImages((prev) =>
      prev.filter((_, currentIndex) => currentIndex !== indexToRemove),
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const imageUrls = formData.images
      .split(/[\n,]/)
      .map((item) => item.trim())
      .filter(Boolean);

    const images = [...uploadedImages, ...imageUrls];

    const ingredients = formData.ingredients
      .split(/[\n,]/)
      .map((item) => item.trim())
      .filter(Boolean);

    const instructions = formData.instructions
      .split(/\n+/)
      .map((item) => item.trim())
      .filter(Boolean);

    const payload = {
      name: formData.foodName.trim(),
      image: images[0] ?? "",
      images,
      servings: Number(formData.servings) || 0,
      prepTimeMinutes: Number(formData.prepTimeMinutes) || 0,
      rating: Number(formData.rating) || 0,
      ingredients,
      instructions,
    };

    if (isEditing) {
      updateRecipe(recipeToEdit.id, payload);
    } else {
      addRecipe(payload);
    }

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-120 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <form
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-700 bg-gray-800 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <ModalHeader
          title={isEditing ? "Edit Meal" : "Add New Meal"}
          onClose={onClose}
        />

        <FormField label="Food Name" className="mb-4">
          <TextInput
            type="text"
            name="foodName"
            value={formData.foodName}
            onChange={handleChange}
            placeholder="e.g. Jollof Rice"
          />
        </FormField>

        <FormField label="Image(s)" className="mb-4">
          <TextInput
            type="text"
            name="images"
            value={formData.images}
            onChange={handleChange}
            placeholder="Paste image URL(s), separated by commas"
          />

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="mt-3 block w-full text-sm text-gray-300 file:mr-4 file:rounded-lg file:border-0 file:bg-orange-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-orange-600"
            aria-label="Upload recipe image"
          />

          {uploadError && (
            <p className="mt-2 text-sm text-red-400">{uploadError}</p>
          )}

          {uploadedImages.length > 0 && (
            <div className="mt-3 grid grid-cols-3 gap-2">
              {uploadedImages.map((imageSrc, index) => (
                <div
                  key={`${imageSrc.slice(0, 24)}-${index}`}
                  className="relative overflow-hidden rounded-md border border-gray-700"
                >
                  <img
                    src={imageSrc}
                    alt={`Uploaded recipe ${index + 1}`}
                    className="h-20 w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveUploadedImage(index)}
                    className="absolute right-1 top-1 rounded bg-black/70 px-1.5 py-0.5 text-xs text-white"
                    aria-label={`Remove uploaded image ${index + 1}`}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          )}
        </FormField>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <FormField
            label="Servings"
            className="mb-0"
            labelClassName="whitespace-nowrap"
          >
            <TextInput
              type="number"
              name="servings"
              min="1"
              value={formData.servings}
              onChange={handleChange}
              placeholder="4"
            />
          </FormField>

          <FormField
            label="Prep Time (mins)"
            className="mb-0"
            labelClassName="whitespace-nowrap"
          >
            <TextInput
              type="number"
              name="prepTimeMinutes"
              min="0"
              value={formData.prepTimeMinutes}
              onChange={handleChange}
              placeholder="30"
            />
          </FormField>

          <FormField
            label="Rating"
            className="mb-0"
            labelClassName="whitespace-nowrap"
          >
            <TextInput
              type="number"
              name="rating"
              min="0"
              max="5"
              step="0.1"
              value={formData.rating}
              onChange={handleChange}
              placeholder="4.8"
            />
          </FormField>
        </div>

        <FormField label="Ingredients" className="mb-4">
          <TextArea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows={4}
            placeholder="List ingredients, separated by commas or line breaks"
          />
        </FormField>

        <FormField label="Instructions" className="mb-6">
          <TextArea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows={5}
            placeholder="Describe preparation steps"
          />
        </FormField>

        <FormActions
          onCancel={onClose}
          cancelLabel="Cancel"
          submitLabel={isEditing ? "Save Changes" : "Add Food"}
        />
      </form>
    </div>
  );
};

export default AddRecipeModal;
