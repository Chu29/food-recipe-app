import Header from "../Header";
import NewMealBtn from "../NewMealBtn";
import { AddRecipeModal } from "../organisms";

const RecipesLayout = ({ children, showForm, onToggleForm }) => {
  return (
    <>
      <Header />
      {children}
      <NewMealBtn handleShowForm={onToggleForm} />
      {showForm && <AddRecipeModal onClose={onToggleForm} />}
    </>
  );
};

export default RecipesLayout;
