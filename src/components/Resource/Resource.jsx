import React from 'react'
const image_api = 'https://image.tmdb.org/t/p/w1280/'


const Resource = ({title, overview,release_date, poster_path, vote_average, name, first_air_date, adult}) => {
    let imageUrl;
    if(poster_path === null ){
        imageUrl = 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-dark-vector-minimalist-movie-poster-background-material-image_145633.jpg'
    }else{
       imageUrl = `${image_api}${poster_path}`
    }

    return (
        <div className='resource'>
            <img src={imageUrl} alt="resource poster"/>
            <div className="resource-info">
                 <h4>{title || name}</h4>
                <span>{vote_average}</span>   
            </div>
            <div className='aditional-info'>
                <div className='top'>
                    <p>{release_date || first_air_date}</p>
                    <p>{adult? '+18' : '+13'}</p> 
                </div>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Resource
