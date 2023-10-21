import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './Container/Client/Home';
import Login from './Component/Login';
// Bootstrap CSS
import 'bootstrap/scss/bootstrap.scss';

function App() {
  return (
    <div className="App color-change">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect to="/" />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
