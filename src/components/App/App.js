import { useState, useEffect } from 'react';

import {
  Route,
  Switch,
  useHistory,
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
import Preloader from '../Preloader/Preloader';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Auth from '../../utils/Auth';
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';

function App() {
  const history = useHistory();
  const location = window.location.pathname;

  const [currentUser, setCurrentUser] = useState({ email: '', name: ''});

  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAppLoading, setIsAppLoading] = useState(true);

  const [movies, setMovies] = useState([]);
  const [searchFilteredMovies, setSearchedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [savedMoviesSearchResponse, setSavedMoviesSearchResponse] = useState('');
  const [responseError, setResponseError] = useState('');

  const tokenCheck = () => {
    const token = localStorage.getItem('token');
      if (token) {
        Auth.getUserData()

          .then((res) => {
            setLoggedIn(true);
            setCurrentUser(res);
            history.push(location);
          })

          .catch((error) => {
            console.log(error);
            localStorage.removeItem("token");
            history.push("/");
          });
      }
  }

  const handleRegister = (signUpData) => {
    Auth.signUp(signUpData)
      
      .then((res) => {
        setResponseError('');
        history.push('/signin');
      })

      .catch((error) => {
        if(error === 'Ошибка: 400') {
          setResponseError('Переданы некорректные данные.');
        }
        if(error === 'Ошибка: 409') {
          setResponseError('Пользователь с таким Email уже существует.');
        }
        if(error === 'Ошибка: 500') {
          setResponseError('Ошибка сервера.');
        }
      })
  }

  const handleLogin = (signInData) => {
    Auth.signIn(signInData)

      .then((res) => {
        setResponseError('');
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        history.push('/movies');
        handleGetUserData();
      })

      .catch((error) => {
        if(error === 'Ошибка: 400') {
          setResponseError('Переданы некорректные данные.');
        }
        if(error === 'Ошибка: 401') {
          setResponseError('Ошибка авторизации.');
        }
        if(error === 'Ошибка: 500') {
          setResponseError('Ошибка сервера.');
        }
      })
  }

  const handleSignOut = () => {
    setCurrentUser({ email: '', name: ''});
    localStorage.clear();
    setSearchedMovies([]);
    Auth.signOut()

      .then((res) => {
        setLoggedIn(false);
        history.push('/');
      })

      .catch((error) => {
        console.log(error);
      })
  }

  const handleUpdateUser = (userData) => {
    Auth.updateUser(userData)
      .then((res) => {
        setCurrentUser(res);
        setResponseError('');
      })

      .catch((error) => {
        if(error === 'Ошибка: 400') {
          setResponseError('Переданы некорректные данные.');
        }
        if(error === 'Ошибка: 409') {
          setResponseError('Пользователь с таким Email уже существует.');
        }
        if(error === 'Ошибка: 500') {
          setResponseError('Ошибка сервера.');
        }
      })
  }

  const handleGetUserData = () => {
    Auth.getUserData()
      .then((res) => {
        setCurrentUser(res);
      })

      .catch((error) => {
        console.log(error);
      })
  }

  const handleGetMovies = () => {
    MoviesApi.getInitialMovies()

      .then((movies) => {
        localStorage.setItem('movies', JSON.stringify(movies));
      })

      .catch((error) => {
        console.log(error);
      })

      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleGetUserMovies = () => {
    MainApi.getSavedMovies()

      .then((res) => {
        setSavedMovies(res);
        localStorage.setItem('savedMovies', JSON.stringify(res));
      })

      .catch((error) => {
        console.log(error);
        localStorage.setItem('savedMovies', JSON.stringify([]));
      })
  }
  
  const handleSearchMovies = (movies, searchKeyword) => {
    const filteredMovies = movies.filter((movie) => movie.nameRU.includes(searchKeyword))

    if (filteredMovies.length === 0 && location === "/saved-movies") {
      setSavedMoviesSearchResponse('Фильмов по запросу не найдено.');
    } else {
      setSavedMoviesSearchResponse('');
    }
    return filteredMovies;
  }

  const durationFilter = (movies) => {
    const durationFilteredMovies = movies.filter((movie) => movie.duration <= 40);
    return durationFilteredMovies;
  }

  const handleMoviesSearchSubmit = (searchKeyword) => {
    handleGetMovies();
    setTimeout(() => setIsLoading(false), 1000);
    setSearchedMovies(handleSearchMovies(movies, searchKeyword));
    localStorage.setItem('lastSearchMovies', JSON.stringify(handleSearchMovies(movies, searchKeyword)));
  }

  const handleSavedMoviesSearchSubmit = (searchKeyword) => {
    setTimeout(() => setIsLoading(false), 1000);
    const localSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    setSavedMovies(handleSearchMovies(localSavedMovies, searchKeyword));
  }

  const checkSaved = (movie) => {
    const isSaved = savedMovies.some(savedMovie => {
      return movie.id === savedMovie.movieId || movie.movieId === savedMovie.movieId;
    })
    return isSaved;
  }

  const toggleLike = (movie, isSaved) => {
    if (isSaved) {
      handleDeleteMovie(movie);
    } else {
      handleSaveMovie(movie);
    }
  }

  const handleSaveMovie = (movieData) => {
    MainApi.saveMovie(movieData)

      .then((res) => {
        setSavedMovies([...savedMovies, res]);
        handleGetUserMovies();
      })

      .catch((error) => {
        console.log(error);
      })
  }

  const handleDeleteMovie = (movieData) => {
    if(!movieData._id) {
      const movieToDelete = savedMovies.filter((movie) => movie.movieId === movieData.id);
      movieData = movieToDelete[0];
    }

    MainApi.deleteMovie(movieData._id) 
      .then((res) => {
        setSavedMovies(savedMovies.filter((movie) => movie._id !== movieData._id));
        handleGetUserMovies();
      })

      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      setLoggedIn(true);

      Promise.all([Auth.getUserData(), MainApi.getSavedMovies()])

        .then(([userData, savedMovies]) => {
          setCurrentUser(userData);
          setSavedMovies(savedMovies);
          setIsAppLoading(false);
          handleGetUserMovies();
        })

        .catch((error) => {
          console.log(`Ошибка при получении данных: ${error}`);
        })

        .finally(() => {
          setIsAppLoading(false);
        })
    } else {
      setIsAppLoading(false);
    }
  },[loggedIn])

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storageMovies = JSON.parse(localStorage.getItem('movies'));
    const localSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const searchFilteredMovies = JSON.parse(localStorage.getItem('lastSearchMovies'));

    if (storageMovies) {
      setMovies(storageMovies);

      if(searchFilteredMovies) {
        setSearchedMovies(searchFilteredMovies);
      }
    } else {
      handleGetMovies();
    }

    if (localSavedMovies) {
      setSavedMovies(localSavedMovies)
    } else if(token) {
      handleGetUserMovies();
    }
  },[loggedIn])

  useEffect(() => {
    tokenCheck();
  }, []);

  return (
    isAppLoading ? <Preloader isLoading={isAppLoading} /> : 
    <>
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header loggedIn={loggedIn} />
            <Main />
            <Footer />
          </Route>

          <Route path="/signin">
            <Login
              handleLogin={handleLogin}
              error={responseError}
            />
          </Route>

          <Route path="/signup">
            <Register
              handleRegister={handleRegister} 
              error={responseError}
            />
          </Route>

          <ProtectedRoute 
            loggedIn={loggedIn}
            handleSignOut={handleSignOut}
            path="/profile"
            component={Profile}
            onUpdateUser={handleUpdateUser}
            error={responseError}
          />

          <ProtectedRoute
            component={Movies}
            path="/movies"
            loggedIn={loggedIn}
            isLoading={isLoading}
            onSubmitSearch={handleMoviesSearchSubmit}
            durationFilter={durationFilter}
            setPreloader={setIsLoading}
            movies={searchFilteredMovies}
            toggleLike={toggleLike}
            checkSaved={checkSaved}
          />

          <ProtectedRoute
            component={SavedMovies}
            path="/saved-movies"
            isLoading={isLoading}
            onSubmitSearch={handleSavedMoviesSearchSubmit}
            savedMovies={savedMovies}
            durationFilter={durationFilter}
            checkSaved={checkSaved}
            loggedIn={loggedIn}
            toggleLike={toggleLike}
            setPreloader={setIsLoading}
            searchResponse={savedMoviesSearchResponse}
          />
          
          <Route path="*">
            <NotFoundError />
          </Route>

        </Switch>
      </div>
    </CurrentUserContext.Provider>
    </>
  );
}

export default App;