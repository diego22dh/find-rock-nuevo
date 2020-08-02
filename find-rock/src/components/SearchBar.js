import React from "react";

class SearchBar extends React.Component {
    handleChange = (e) => {
        console.log(e.target.name, e.target.value);
    };
    handleClick = (e) => {
        // e.preventDefault();
        // console.log(e.target.name, "Aprestate el boton");
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name);
    };
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col md-2">logo</div>
                        <div className="col md-4">
                            <form
                                name="form"
                                className="form-inline"
                                onSubmit={this.handleSubmit}
                            >
                                <div className="form-group mx-sm-3 mb-2">
                                    <input
                                        name="input"
                                        type="text"
                                        className="form-control"
                                        placeholder="Que banda queres buscar?"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <button
                                    nane="buscar"
                                    type="submit"
                                    className="btn btn-primary mb-2"
                                    // onClick={this.handleClick}
                                >
                                    Buscar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchBar;
