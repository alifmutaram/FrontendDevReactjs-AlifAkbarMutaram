import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import RestaurantDetail from "./RestaurantDetail";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/restaurant/:resId" component={} /> */}
        <Route path="/restaurant" component={RestaurantDetail} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
