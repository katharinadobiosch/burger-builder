import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";
import Home from "./views/Home";

import BurgerCreator from "./views/BurgerCreator";
import OrderForm from "./views/OrderForm";
import ThankYou from "./views/ThankYou";
import PlaceOrder from "./views/PlaceOrder";
import OrderOverview from "./views/OrderOverview";
import "../src/css/styles.css";

const App = () => {
  return (
    <div className="app">
      <Router basename="/burger-builder">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/burger-builder" exact component={BurgerCreator} />
          <Route path="/OrderForm" exact component={OrderForm} />
          <Route path="/ThankYou" exact component={ThankYou} />
          <Route path="/PlaceOrder" exact component={PlaceOrder} />
          <Route path="/OrderOverview" component={OrderOverview} />

          {/* <Route path="*" component={NotFound}/> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
