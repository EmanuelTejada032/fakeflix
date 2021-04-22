import React, {useState, useEffect} from 'react'
import Resource from '../components/Resource/Resource'

const featured_movies = 'https://api.themoviedb.org/3/discover/movie?api_key=7b2fdaac902fafe3262222fbf37450b7'

const Movies = () => {
        const [movies, setMovies] = useState([])

        useEffect(() => {
          fetch(featured_movies)
          .then( res => res.json())
          .then(data => {
            setMovies(data.results)
          })
        
          // eslint-disable-next-line
        }, [])

        return (
        <>
          <div className='container resource-container'>
             {movies.length > 0? movies.map((resource) => (
                <Resource {...resource} key={resource.id} />
             )): 'No movies found'}
          </div>      
        </>
    )
}

export default Movies
