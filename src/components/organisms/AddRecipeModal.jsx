import { useState } from "react";
import { useFoodContext } from "../../hooks/useFoodContext";
import { TextInput, TextArea } from "../atoms";
import { FormField, ModalHeader, FormActions } from "../molecules";

const AddRecipeModal = ({ onClose }) => {
  const { addRecipe } = useFoodContext();
  const [formData, setFormData] = useState({
    foodName: "",
    images: "",
    servings: "",
    prepTimeMinutes: "",
    rating: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const images = formData.images
      .split(/[\n,]/)
      .map((item) => item.trim())
      .filter(Boolean);

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

    addRecipe(payload);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <form
        className="w-full max-w-lg rounded-2xl border border-gray-700 bg-gray-800 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <ModalHeader title="Add New Meal" onClose={onClose} />

        <FormField label="Food Name">
          <TextInput
            type="text"
            name="foodName"
            value={formData.foodName}
            onChange={handleChange}
            placeholder="e.g. Jollof Rice"
          />
        </FormField>

        <FormField label="Image(s)">
          <TextInput
            type="text"
            name="images"
            value={formData.images}
            onChange={handleChange}
            placeholder="Paste image URL(s), separated by commas"
          />
        </FormField>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <FormField label="Servings" className="mb-0">
            <TextInput
              type="number"
              name="servings"
              min="1"
              value={formData.servings}
              onChange={handleChange}
              placeholder="4"
            />
          </FormField>

          <FormField label="Prep Time (mins)" className="mb-0">
            <TextInput
              type="number"
              name="prepTimeMinutes"
              min="0"
              value={formData.prepTimeMinutes}
              onChange={handleChange}
              placeholder="30"
            />
          </FormField>

          <FormField label="Rating" className="mb-0">
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

        <FormField label="Ingredients">
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
          submitLabel="Add Food"
        />
      </form>
    </div>
  );
};

export default AddRecipeModal;
