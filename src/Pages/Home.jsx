import React from 'react'
import Resource from '../components/Resource/Resource'

const Home = ({homeData}) => {
    return (
        <>
          <h2 style={{textAlign: 'center'}}>Look at today's trending</h2>
          <div className='container resource-container'>
             {homeData.length > 0 && homeData.map((resource) => (
                <Resource {...resource} key={resource.id} />
             ))}
          </div>      
        </>
    )
}

export default Home
