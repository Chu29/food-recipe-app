import FoodCard from "../components/FoodCard";
import Header from "../components/Header";
import NewMealBtn from "../components/NewMealBtn";
import { useFoodContext } from "../context/FoodContext";

const RecipesPage = () => {
  const { foodData, isPending, isError } = useFoodContext();

  return (
    <>
      <Header />
      {isPending ? (
        <div className="mt-[50vh] flex flex-col gap-8 items-center">
          <p className="h-10 w-10 rounded-full border-4 border-t-transparent border-orange-500 animate-spin"></p>
        </div>
      ) : isError ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p>
              An Error occurred: Make sure you are connected to the internet.{" "}
              <br />
              Try reloading the page
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 max-w-7xl mx-auto">
            {foodData.map((recipe) => (
              <FoodCard data={recipe} />
            ))}
          </div>
          <NewMealBtn />
        </>
      )}
    </>
  );
};

export default RecipesPage;
