import React from 'react';

const Navbar = () => {
    return (
        <>
        <nav className="navbar bg-primary navbar-dark">
            <div className="container">
                <a href="https://www.github.com" className='navbar-brand' style={{fontSize: '25px'}}>
                    <i className="fab fa-github"/> Github Finder
                </a>
            </div>
        </nav>
        </>
    )
}

export default Navbar
