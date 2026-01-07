import FoodCard from "../components/FoodCard";
import Header from "../components/Header";
import { useFoodContext } from "../context/FoodContext";

const RecipesPage = () => {
  const { data, isPending, isError } = useFoodContext();

  return (
    <>
      <Header />
      {isPending ? (
        <div className="mt-[50vh] flex flex-col gap-8 items-center">
          <p className="h-10 w-10 rounded-full border-4 border-t-transparent border-orange-500 animate-spin"></p>
        </div>
      ) : isError ? (
        <div> An Error occurred. Try reloading the page</div>
      ) : (
        <FoodCard data={data} />
      )}
    </>
  );
};

export default RecipesPage;
