import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer.js';

import Home from './components/pages/Home.js';
import About from './components/pages/About.js';

import Education from './components/pages/Education';
import FoodBank from './components/pages/FoodBank';

import Qurbani from './components/pages/Qurbani';
import Registration from './components/pages/Registration/Registration';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Login from './components/pages/Login/Login';

import Review from './components/pages/Review/Review';
import Blood_donation from './components/pages/Blood_donation';
import Contribute from './components/pages/Contribute/Contribute';
import Sidebar from './components/pages/Sidebar/Sidebar';
import Education_list from './components/pages/Data-show/Education_list';
import Food_list from './components/pages/Data-show/Food_list';
import Blood_list from './components/pages/Data-show/Blood_list';
import Qurbani_list from './components/pages/Data-show/Qurbani_list';
import Review_list from './components/pages/Data-show/Review_list';
import Contribute_list from './components/pages/Data-show/Contribute_list';


const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
 
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
     
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/education' component={Education} />
        <Route exact path='/foodbank' component={FoodBank} />
        <Route exact path='/bloodDonation' component={Blood_donation} />
        
        
        <Route exact path='/qurbani' component={Qurbani} />
        <Route exact path='/review' component={Review} />
        <Route exact path='/contribute' component={Contribute} />
        <Route exact path='/sidebar' component={Sidebar} />
        <Route exact path='/education-list' component={Education_list} />
        <Route exact path='/food-list' component={Food_list} />
        <Route exact path='/blood-list' component={Blood_list} />
        <Route exact path='/qurbani-list' component={Qurbani_list} />
        <Route exact path='/review-list' component={Review_list} />
        <Route exact path='/contribute-list' component={Contribute_list} />


        
       

      </Switch>
      {/* <Footer /> */}
      
    </Router>
   
  );
};

export default App;
