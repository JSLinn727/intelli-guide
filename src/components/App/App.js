import React, { Component } from "react";
import { BrowserRouter, Switch, Link, Route, BrowserHistory } from "react-router-dom";

import Index from "../Index/Index";
import ListView from "../ListView/ListView";
import SelectionView from "../SelectionView/SelectionView";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/permanent" component={ListView} />
            <Route exact path="/expedition" component={ListView} />
            <Route exact path="/architecture" component={ListView} />
            <Route path="/family" component={ListView} />
            <Route path="/item/:path" component={SelectionView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
