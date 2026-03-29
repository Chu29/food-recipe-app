import Header from "../Header";
import NewMealBtn from "../NewMealBtn";
import { AddRecipeModal } from "../organisms";

const RecipesLayout = ({
  children,
  showForm,
  onToggleForm,
  recipeToEdit = null,
}) => {
  return (
    <>
      <Header />
      {children}
      <NewMealBtn handleShowForm={onToggleForm} />
      {showForm && (
        <AddRecipeModal onClose={onToggleForm} recipeToEdit={recipeToEdit} />
      )}
    </>
  );
};

export default RecipesLayout;
