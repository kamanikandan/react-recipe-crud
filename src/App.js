import React from "react";
import { Route, Switch } from "react-router-dom";
import RecipesPage from "./components/RecipesPage";
import RecipeDetails from "./components/RecipeDetails";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return(
    <div className="container">
      <NavBar />
      <Switch>
        <Route path="/recipes/:id" component={RecipeDetails} />
        <Route path="/recipes/new" component={RecipeDetails} />
        <Route path="/recipes" component={RecipesPage} />
        <Route path="/" component={RecipesPage} />
      </Switch>
    </div>
  );
}

export default App;
