import React from 'react'
import {Link} from 'react-router-dom'
export default function SideNav() {
    return (
        <div className='sidenav'>
            <div className='smallBox'>
            <Link to='/'><h3>Welcome</h3></Link>
            <div className='line' ></div>
            </div>
            <div className='smallBox'>
            <Link to='/about'><h3>About Me</h3></Link>
            <div className='line' ></div>
            </div>
            <div className='smallBox'>
            <Link to='/projects'><h3>Projects</h3></Link>
            <div className='line' ></div>
            </div>
            <div className='smallBox'>
            <Link to='/contact'><h3>Contact</h3></Link>
            <div className='line' ></div>
            </div>
        </div>
    )
}
