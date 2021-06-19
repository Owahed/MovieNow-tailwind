import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home';
import MovieDetail from './Component/Home/MovieDetail';
import NavBarOne from './Component/Home/NavBarOne/NavBarOne';
import TvShow from './Component/Home/TvShow';


function App() {
  return (
    <div>
      <Router>
      <NavBarOne></NavBarOne>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
        <Route path="/product/:id">
            <MovieDetail></MovieDetail>
          </Route>
        <Route path="/tvShow">
            <TvShow></TvShow>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
