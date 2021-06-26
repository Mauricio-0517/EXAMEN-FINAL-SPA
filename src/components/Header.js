import React from 'react'

export default function Header() {
    return (
        <div className="Header">
            <ul>
            <Link className="Home" to="/home"><li>Home</li></Link>
                <Link className="about" to="/About"><li>about</li></Link>
                <Link className="Dashbord" to="/Dashbord"><li>Dashbord</li></Link>
           
            </ul>
        </div>
            
    )
}