import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import RecipesPage from "./pages/RecipesPage";
import FavouritesPage from "./pages/FavouritesPage";
import Community from "./pages/Community";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={LandingPage}></Route>
        <Route path="/recipes" Component={RecipesPage}></Route>
        <Route path="/favorites" Component={FavouritesPage}></Route>
        <Route path="/community" Component={Community}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
