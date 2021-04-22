import React from 'react'
const image_api = 'https://image.tmdb.org/t/p/w500/'


const Resource = ({title, overview, poster_path, vote_average}) => {
    return (
        <div className='resource'>
            <img src={`${image_api}${poster_path}`} alt=""/>
        </div>
    )
}

export default Resource
