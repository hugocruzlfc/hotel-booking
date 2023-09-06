import { Route, Switch } from "wouter";

import HotelList from "./components/HotelList";
import HotelDetails from "./components/HotelDetails";

function App() {
  return (
    <Switch>
      <Route
        path="/"
        component={HotelList}
      />
      <Route
        path="/hotel/:id"
        component={HotelDetails}
      />
    </Switch>
  );
}

export default App;
