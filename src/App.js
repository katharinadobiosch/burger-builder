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
            <Router basename="/BurgerCreator">
<<<<<<< HEAD
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route
                        path="/BurgerCreator"
                        exact
                        component={BurgerCreator}
                    />
                    <Route path="/OrderForm" exact component={OrderForm} />
                    <Route path="/ThankYou" exact component={ThankYou} />
                    <Route path="/PlaceOrder" exact component={PlaceOrder} />
                    <Route
                        path="/OrderOverview"
                        exact
                        component={OrderOverview}
                    />
=======
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/BurgerCreator" exact component={BurgerCreator} />
          <Route path="/OrderForm" exact component={OrderForm} />
          <Route path="/ThankYou" exact component={ThankYou} />
          <Route path="/PlaceOrder" exact component={PlaceOrder} />
          <Route path="/OrderOverview" exact component={OrderOverview} />
>>>>>>> 1749d3ccb08245d9973f854308a417a6c94fa895

          {/* <Route path="*" component={NotFound}/> */}
        </Switch>
      </Router>
    </div>
    );
};

export default App;
