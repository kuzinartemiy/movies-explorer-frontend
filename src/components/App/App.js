// import { useState } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';
import '../../vendor/normalize.css';
import '../../vendor/fonts/fonts.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NotFoundError from '../NotFoundError/NotFoundError';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/profile">
          <Header />
          <Profile />
        </Route>

        <Route path="/movies">
          <Header />
          <Movies />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <Header />
          <SavedMovies />
          <Footer />
        </Route>
        
        <Route path="/404">
          <NotFoundError />
        </Route>
      </Switch>
    </div>
  );
}

export default App;