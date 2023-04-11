import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'
function Topbar({serach,handleChange}) {
    return (
        <div className='topbar'>
            <h1>Movies</h1>
            <div className='input-filed'>
                <input type="text" name="serach" value={serach} placeholder='Search....' onChange={handleChange} />
            </div>
            <nav>
                <ul>
                    <Link className='list' to="/">Home</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Topbar
