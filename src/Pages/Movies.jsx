import React from 'react'
import Resource from '../components/Resource/Resource'



const Movies = ({movies}) => {

        return (
        <>
          
          <div className='container resource-container'>
             {movies.length > 0 && movies.map((resource) => (
                <Resource {...resource} key={resource.id} />
             ))}
          </div>      
        </>
    )
}

export default Movies
