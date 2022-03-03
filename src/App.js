import React from "react"; 
import { Route, Switch } from "react-router";
import Home from "./Home";
import AboutPage from "./Pages/AboutPage";
import ContactUsPage from "./Pages/ContactUsPage";
import ServicesPage from "./Pages/ServicesPage";
import Error404 from "./Pages/Error404";

const App = () => {
return(
  <>
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route path="/about" component={AboutPage}></Route>
    <Route path="/services" component={ServicesPage}></Route>
    <Route path="/contact" component={ContactUsPage}></Route>
    <Route component={Error404}></Route>
  </Switch>
  </>
);
};

export default App;