import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Trending from './pages/trending';
import Footer from './Components/Footer';
import NavBar from './Components/NavBars/NavBar';

const App = () => {
  const [onfooter, setfooter] = useState(false);
  return (
    <>
      <Router>
        <div className='w-full md:w-[80%] min-h-screen float-right bg-gray-100
        overflow-hidden mt-32 md:mt-20'>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/trending">
              <Trending />
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
