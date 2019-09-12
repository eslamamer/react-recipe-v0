import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
        const {
            recipe_id,
            image_url,
            title,
            publisher,
            source_url
        } = this.props.recipe,
           {handelDitails} = this.props
        return (
            <React.Fragment>
                    <div className="col-10 col-md-6 mx-auto col-lg-4 my-3"> 
                        <div className="card">
                            <img src={image_url} style={{height:'12rem'}} className="img-card-top" alt="recipe"/>
                            <div className="card-body text-capitalize">
                                <h6 className="text-nowrap">{title}</h6>
                                <h6 className="text-warning text-slanted">provided by {publisher}</h6>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary text-capitalize"
                                        onClick={()=>handelDitails(0,recipe_id)}>Details</button>
                                <a href={source_url} 
                                   className="btn btn-success mx-2 text-capitalize"
                                   target="_blank">Recipe url
                                </a>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
