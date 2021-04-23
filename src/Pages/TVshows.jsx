import React , {useState, useEffect}  from 'react'
import Resource from '../components/Resource/Resource'


const featured_tvShows = 'https://api.themoviedb.org/3/tv/popular?api_key=7b2fdaac902fafe3262222fbf37450b7'

const TVshows = () => {
    const [tvShows, setTvShows] = useState([])

        useEffect(() => {
          fetch(featured_tvShows)
          .then( res => res.json())
          .then(data => {
            setTvShows(data.results)
            console.log(data.results)
          })

          // eslint-disable-next-line
        }, [])

        return (
        <>
          <div className='container resource-container'>
             {tvShows.length > 0? tvShows.map((resource) => (
                <Resource {...resource} key={resource.id} />
             )): 'No Tv Shows  found'}
          </div>      
        </>
    )
}

export default TVshows
