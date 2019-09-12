import React, { Component } from 'react';
import './App.css';
import {recipes} from './tempList'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import RecipeDetail from './component/recipeDetails'
import RecipeList from './component/recipeList'

class App extends Component {
  state = {
    recipes:recipes,
    url:"https://www.food2fork.com/api/search?key=ba06df9dcc7b20296abdb709f2f51e8f",
    searchUrl:'https://www.food2fork.com/api/search?key=ba06df9dcc7b20296abdb709f2f51e8f',
    recipe_id: "",
    pageIndex:1,
    search:"",
    query:'&q=',
    error:""
  }
  async getRecipes(){
    try {  
      const data       = await fetch(this.state.url);
      const jsonData   = await data.json();
      console.log(jsonData)
      if(jsonData.recipes.length === 0){
        this.setState(()=>{
          return {
            error:"sorry your search not return any result"
          }
        })
      } else { 
      this.setState(()=>{
       return {
          recipes : jsonData.recipes
        }
      })
     }
    } catch (error) {
      console.log(error); 
    }
  }
  
  componentDidMount(){
    this.getRecipes()
   
  }
displayPage = index =>{
  switch (index){ 
      default: 
        case 1: 
          return (
                  <RecipeList recipes={this.state.recipes} 
                              handelDitails={this.handelDitails}
                              handelChange={this.handelChange}
                              handelSubmit={this.handelSubmit}
                              value={this.state.search}
                              error={this.state.error}
                   /> 
                  )
        case 0:  
          return (
                  <RecipeDetail id={this.state.recipe_id}
                                handelIndex={this.handelIndex}
                  /> 
                 )
}
  }
handelIndex = index=>{
 this.setState({
   pageIndex : index
 })
}
handelDitails = (index ,id)=>{
 this.setState({
   recipe_id : id,
   pageIndex : index
 })
}
handelChange = (e)=>{
  this.setState({
    search:e.target.value 
  },()=>{
    console.log(this.state.search)
  })
}
handelSubmit = (e)=>{
  e.preventDefault()
  const {searchUrl,query,search} = this.state
  this.setState(()=>{
    return {
      url:`${searchUrl}${query}${search}`, 
      search:''
    }
  },()=>{
    this.getRecipes()
  })
}
  render() {
    return (
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    );
  }
}
export default App;
