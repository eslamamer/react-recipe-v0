import React, { Component } from 'react'
import {recipe} from '../tempDetails'
export default class RecipeDetails extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         recipe : recipe,
    //         url : `https://www.food2fork.com/api/get?key=ba06df9dcc7b20296abdb709f2f51e8f&rId=${this.props.id}`
    //     }
    // }
    // async componentDidMount(){
    //       try {
    //         const data       = await fetch(this.state.url);
    //         const jsonData   = await data.json();
    //         this.setState({
    //           recipe : jsonData.recipe
    //         })
    //       } catch (error) {
    //         console.log(error); 
    //       }
    //     }
    state= {
        recipe : recipe
    }
    async componentDidMount(){
        const id  = this.props.id
        const url = `https://www.food2fork.com/api/get?key=ba06df9dcc7b20296abdb709f2f51e8f&rId=${id}`
              try {
                const data       = await fetch(url);
                const jsonData   = await data.json();
                this.setState({
                  recipe : jsonData.recipe
                })     
                // this.setState((state,props)=>{
                //     return {
                //         recipe : jsonData.recipe
                //     }
                // },()=>{}         //(callback function)
                //       )          //(another option for using set state)
              } catch (error) {
                console.log(error); 
              }
            }


    render() {
        const {
            image_url,
            ingredients,
            publisher,
            publisher_url,
            source_url,
            title
              } = this.state.recipe
        const {handelIndex} = this.props
        return (
            <React.Fragment>
               <div className='container'>
                   <div className="row">
                       <div className="col-10 col-md-6 mx-auto my-3">
                           <button  type="button" 
                                    className="btn btn-warning mb-5 text-capitalize"
                                    onClick={()=>handelIndex(1)}>
                               back to recipe list
                           </button>
                           <img src={image_url} className="d-block w-100" alt="recipe"/>
                       </div>
                       <div className="col-10 col-md-6 mx-auto my-3">
                           <h6 className="text-uppercase">{title}</h6>
                           <h6 className="text-capitalized text-warning text-slanted">
                               provided by{publisher}
                           </h6>
                           <a href={publisher_url}
                              target="_blanck"
                               rel="noopener noreferrer"
                               className="btn btn-primary mt-2
                                          text-capitalize">
                                publisher webpage</a>
                            <a href={source_url}
                              target="_blanck"
                               rel="noopener noreferrer"
                               className="btn btn-success mt-2 mx-3
                                          text-capitalize">
                                recipe url</a>
                            <ul classname="list-group mt-4">
                                <h2 className="text-capitalize mt-3 mb-4">ingredients</h2>
                                {ingredients.map((item,index)=>{
                                    return (
                                        <li key={index} className="list-group-item
                                        text-slanted">{item}</li>
                                    )                                 }
                                )}
                            </ul>
                       </div>
                   </div>
               </div> 
            </React.Fragment>
        )
    }
}
