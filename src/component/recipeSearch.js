import React, { Component } from 'react'

export default class ReceptSearch extends Component {
    render() {
        const {handelChange,handelSubmit,value} = this.props
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                            <h1 className="text-capitalize text-slanted">
                                search for recipe with{' '}
                                <strong className="text-danger">foor2fork</strong>
                            </h1>
                            <form className="mt-4" onSubmit={handelSubmit}>
                                <label htmlFor="search" className="text-capitalize">
                                    type recipe seperated by comma
                                </label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="search"
                                        placeholder="chicken,onions,carrots"
                                        className="form-control"
                                        onChange={handelChange}
                                        value={value}
                                    />
                                    <div className="input-group-append">
                                        <button
                                            type="submit"
                                            className="input-group-text bg-primary text-white"
                                        >
                                            <i className="fas fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}