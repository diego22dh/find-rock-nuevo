import React from "react";
import "./search-bar.css";
import logo from "../logo.svg";

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
                <div className="container">
                    <div className="row">
                        <div className="col md-2">
                            <img src={logo} alt="logo" className="logo-barra" />
                        </div>
                        <div className="col md-6">
                            <form
                                name="form"
                                className="form-inline"
                                onSubmit={this.handleSubmit}
                            >
                                <div className="busqueda">
                                    <input
                                        name="input"
                                        type="text"
                                        id="buscar"
                                        placeholder="Que banda queres buscar?"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchBar;
