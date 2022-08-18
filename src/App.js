import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Trending from './pages/trending';

function App() {
  return (
    <>
    <Router>
      <div className="flex justify-center py-8">
        <ul className="flex w-1/2 justify-between">
          <li >
            <Link to="/">Home</Link>
          </li>
          <li >
            <Link to="/trending">Trending</Link>
          </li>
          <li >
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/trending">
          <Trending />
        </Route>
      </Switch>
      
    </Router>
    </>
  );
}

export default App;
