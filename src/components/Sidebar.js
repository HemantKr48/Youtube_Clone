import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);

    if(!isMenuOpen) return null;
  return (
    <div className='w-48'>
    <ul className='shadow-lg '>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>

    </ul>

    <div>
        <h2>Subscriptions</h2>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>

        </ul>
    </div>
    <div>
        <h2>Explore More</h2>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>

        </ul>
    </div>
    </div>
  )
}

export default Sidebar
