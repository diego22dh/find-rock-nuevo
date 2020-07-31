import React, { Component } from "react";
import ArtistCard from "./components/ArtistCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
        </div>
      </div>
    );
  }
}

export default App;
