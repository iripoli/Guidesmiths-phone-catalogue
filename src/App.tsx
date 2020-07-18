import React from "react";
import HomePage from "./components/Home-Page/Home-page";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import CataloguePage from "./containers/Catalogue-Page/Catalogue-Page";
import RatingsPage from "./containers/Ratings-Page/Ratings-Page";
import NavBar from "./components/NavBar/Navbar";
import PhoneProfilePage from "./containers/PhoneProfilePage/PhoneProfilePage";
import Page404 from "./components/404/404";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/catalogue/:id" component={PhoneProfilePage} />
        <Route exact path="/catalogue" component={CataloguePage} />
        <Route exact path="/ratings" component={RatingsPage} />;
        <Route component={Page404} />
      </Switch>
    </>
  );
}

export default App;
