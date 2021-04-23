import React from 'react'
import Resource from '../components/Resource/Resource'



const TVshows = ({tvShows}) => {

        return (
        <>
          <div className='container resource-container'>
             {tvShows.length > 0 && tvShows.map((resource) => (
                <Resource {...resource} key={resource.id} />
             ))}
          </div>      
        </>
    )
}

export default TVshows
