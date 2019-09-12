import React, { Component } from 'react'
import Recipe from './recipe' 
import RecipeSearch from './recipeSearch' 
export default class RecipeList extends Component {
    render() {
        const {recipes, handelDitails,handelChange,handelSubmit,value,error} = this.props
        return (
        <React.Fragment>
            <RecipeSearch
            handelChange={handelChange}
            handelSubmit={handelSubmit}
            value={value}
            />
            <div className="container my-5">
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto text-center text-uppercase mb-3" >
                        <h1 className="text-slanted">Recipe List</h1>
                    </div>
                </div>
                    <div className="row">
                        {   error? <h1 className="mx-auto text-danger text-slanted">
                                        {error}
                                   </h1>
                                : recipes.map(recipe=>{
                                                return(
                                                    <Recipe key={recipe.recipe_id}
                                                    recipe={recipe}
                                                    handelDitails={handelDitails}/>
                                                )  
                                            })
                            }
                    </div>
                </div>                  
        </React.Fragment>
        )
    }
}
