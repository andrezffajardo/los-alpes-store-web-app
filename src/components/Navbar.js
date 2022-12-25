import React from 'react'

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">
            <div className="row align-items-center">
              <div className="col-sm-8">
                <img src="/images/los-alpes-logo.png" alt="Logo" width="127" height="79" />
              </div>
              <div class="col-sm-4">
                <h1 className="title">Product List</h1>
              </div>
            </div>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
