import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    return (
        <div className="card h-100 rounded-0">
            <img src={recipe.imgUrl} className="card-img-top" alt={recipe.name} />
            <div className="card-body">
                <h4 className="card-title">{ recipe.name }</h4>
                <p className="card-text">{ recipe.ingredients }</p>
            </div>
            <div className="card-footer border-top-0 border-bottom-0 p-0 bg-transparent">
                <div className="row no-gutters text-center">
                <div className="col">
                    {!recipe.isFavourite && (<button className="btn-block border border-left-0 border-right-0 p-3" >Favourite</button>)}
                    {recipe.isFavourite && (<button className="btn-block border border-left-0 border-right-0 p-3" >Unfavourite</button>)}
                </div>
                <div className="col">
                    <Link className="btn-block border border-right-0 p-3" to={`/recipes/${recipe._id}`}>Edit</Link>
                </div>
                <div className="col">
                    <button className="btn-block border p-3">Delete</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;