import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/home';
import Footer from './Components/Footer';
import Movies from './pages/movies/index';
import MoviesDetails from './pages/movies/details';
import People from './pages/people';
import PeopleDetails from './pages/people/details';
import TvShows from './pages/tv-shows/details';
import TvShowDetails from './pages/tv-shows';
import AddMovie from './pages/movies/addNew';
import AddTvShow from './pages/tv-shows/AddNew';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import More from './pages/More';
import Settings from './pages/Settings';
import About from './pages/About';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/more" exact>
            <More />
          </Route>
          <Route path="/settings" exact>
            <Settings />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/movies/addnew" exact>
            <AddMovie />
          </Route>
          <Route path="/movies/">
            <MoviesDetails />
          </Route>
          <Route path="/people" exact>
            <People />
          </Route>
          <Route path="/people/">
            <PeopleDetails />
          </Route>
          <Route path="/tv-shows" exact>
            <TvShows />
          </Route>
          <Route path="/tv-shows/addnew" exact>
            <AddTvShow />
          </Route>
          <Route path="/tv-shows/">
            <TvShowDetails />
          </Route>
        </Switch>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/trending">Trending</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </div>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
