import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/actions";
import RecipeCard from "./RecipeCard";

class RecipesPage extends Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    const { recipes } = this.props;

    const emptyMessage = (<p>No Recipes found!</p>);

    const recipeList = (
    <div className="row"> 
      { recipes.map(recipe => (
        <div key={recipe._id } className="col col-md-4 mb-4">
          <RecipeCard recipe={recipe}></RecipeCard>
        </div>
      )) }
    </div> 
    );
    return (
      <div>
        { recipes.length === 0 ? emptyMessage : recipeList }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

export default connect(mapStateToProps, { fetchRecipes })(RecipesPage);
