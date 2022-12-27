import React from 'react';
//import { useProducts } from '../hooks/useProducts';

export const Navbar = ({ searcher }) => {

  //const { searcher } = useProducts();

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
            <input className="form-control me-3" type="search" onChange={searcher} placeholder="Search" aria-label="Search"/>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
