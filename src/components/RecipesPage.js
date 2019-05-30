import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/actions";

class RecipesPage extends Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    return <h1>Recipes Page</h1>;
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

export default connect(mapStateToProps, { fetchRecipes })(RecipesPage);
