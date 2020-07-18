import React from "react";
import HomePage from "./containers/Home-Page/Home-page";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import CataloguePage from "./containers/Catalogue-Page/Catalogue-Page";
import RatingsPage from "./containers/Ratings-Page/Ratings-Page";
import NavBar from "./containers/NavBar/Navbar";
import PhoneProfilePage from "./containers/PhoneProfilePage/PhoneProfilePage";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/catalogue/:id" component={PhoneProfilePage} />
        <Route path="/catalogue" component={CataloguePage} />
        <Route exact path="/ratings" component={RatingsPage} />;
      </Switch>
    </>
  );
}

export default App;
