import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Error from './Pages/Error'
import Movies from './Pages/Movies'
import TVshows from './Pages/TVshows'
import Home from './Pages/Home'

const featured_movies = 'https://api.themoviedb.org/3/discover/movie?api_key=7b2fdaac902fafe3262222fbf37450b7'
const featured_tvShows = 'https://api.themoviedb.org/3/tv/popular?api_key=7b2fdaac902fafe3262222fbf37450b7'
const findMovieUrl = 'https://api.themoviedb.org/3/search/movie?&api_key=7b2fdaac902fafe3262222fbf37450b7&query='
const findTvShowUrl = 'https://api.themoviedb.org/3/search/tv?&api_key=7b2fdaac902fafe3262222fbf37450b7&query='
const findTrending = 'https://api.themoviedb.org/3/trending/all/day?api_key=7b2fdaac902fafe3262222fbf37450b7'


function App() {
      const [searchTerm, setSearchTerm] = useState('');
      const [movies, setMovies] = useState([]);
      const [tvShows, setTvShows] = useState([]);
      const [homeData, setHomeData] = useState([]);
      

      const handleSubmit = (e) => {
        e.preventDefault();
        if(window.location.pathname === '/movies'){
          fetch(findMovieUrl + searchTerm)
          .then( res => res.json())
          .then(data => {
          setMovies(data.results)
          })
        }else if(window.location.pathname === '/tvshows'){
          fetch(findTvShowUrl + searchTerm)
          .then( res => res.json())
          .then(data => {
            setTvShows(data.results)
          })
        } else {
          fetch(findMovieUrl + searchTerm)
          .then( res => res.json())
          .then(data => {
          setHomeData(data.results)
          })
        }

        setSearchTerm('')

      }
      
      useEffect(() => {
        fetch(featured_movies)
        .then( res => res.json())
        .then(data => {
          setMovies(data.results)
        })

        fetch(featured_tvShows)
          .then( res => res.json())
          .then(data => {
            setTvShows(data.results)
        })

        fetch(findTrending)
          .then( res => res.json())
          .then(data => {
            setHomeData(data.results)
          })
        // eslint-disable-next-line
      }, [])



  return (
      <><Router>
          <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSubmit={handleSubmit}/>
          <Switch>
            <Route exact path='/'>
              <Home homeData={homeData} />
            </Route>
            <Route path='/movies'>
              <Movies movies={movies} />
            </Route>
            <Route path='/tvshows'>
              <TVshows tvShows={tvShows} />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
