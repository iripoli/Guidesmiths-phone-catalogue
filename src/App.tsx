import React from "react";
import HomePage from "./containers/Home-Page/Home-page";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import CataloguePage from "./containers/Catalogue-Page/Catalogue-Page";
import RatingsPage from "./containers/Ratings-Page/Ratings-Page";
import NavBar from "./containers/NavBar/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/catalogue" component={CataloguePage} />
        <Route exact path="/ratings" component={RatingsPage} />;
      </Switch>
    </>
  );
}

export default App;
