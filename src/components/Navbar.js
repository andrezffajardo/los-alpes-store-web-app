import React from 'react';

// The Navbar component displays a navigation bar at the top of the page
export const Navbar = ({ searcher }) => {


  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">
            <div className="row align-items-center">
              <div className="col-sm-8">
                <img src="/images/los-alpes-logo.png" alt="Logo" width="127" height="79" />
              </div>
              <div className="col-sm-4">
                <h1 className="title">Product List</h1>
              </div>
            </div>
          </div>
          <form className="col-sm-4" role="search">
          {/* The search input, which calls the searcher function when its value is changed */}
            <input className="form-control me-3" type="search" onChange={searcher} placeholder="Search" aria-label="Search"/>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
