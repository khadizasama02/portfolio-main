
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
          
        </Route>
        <Route exact path="/">
          <Home/>
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
