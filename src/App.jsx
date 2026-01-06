import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import RecipesPage from "./pages/RecipesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={LandingPage}></Route>
        <Route path="/recipes" Component={RecipesPage}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
