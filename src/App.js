import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Movies from './pages/movies/index';
import MoviesDetails from './pages/movies/details';
import People from './pages/people';
import PeopleDetails from './pages/people/details';
import TvShows from './pages/tv-shows/details';
import TvShowDetails from './pages/tv-shows';
import AddMovie from './pages/movies/addNew';
import AddTvShow from './pages/tv-shows/addNew';
import Login from './pages/login';
import SignUp from './pages/signUp';
import More from './pages/more';
import Settings from './pages/settings';
import About from './pages/about';
import Footer from './Components/Footer';
import NavBar from './Components/NavBars/NavBar';

const App = () => {
  const [onfooter, setfooter] = useState(false);
  return (
    <>
      <Router>
        <div className='w-full md:w-[80%] min-h-screen float-right bg-gray-100
         mt-32 md:mt-20 relative'>
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
        </div>
        <NavBar changePostion = {onfooter}/>
        <Footer inViewPort = {setfooter}/>
      </Router>
    </>
  );
};

export default App;
