import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
   <>
   <nav
  id="nav-scroll"
  className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top bg-white"
>
  <div className="container">
    <a className="navbar-brand" href="index.html">
      <img
        src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/cropped-logo-color-1.png"
        alt=""
      />
    </a>
    <button
      className="navbar-toggler collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbar-toggle-nav-center"
      aria-controls="navbar-toggle-nav-center"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="icon-bar top-bar" />
      <span className="icon-bar middle-bar" />
      <span className="icon-bar bottom-bar" />
      
    </button>
    {/* / navbar-toggler */}
    <div className="collapse navbar-collapse" id="navbar-toggle-nav-center">
      <ul className="navbar-nav ml-auto">
        {/* Features Dropdown */}
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle active"
            to="#features"
            id="featuresDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Features
          </Link>
          <ul className="dropdown-menu" aria-labelledby="featuresDropdown">
            <li>
              <Link
                className="dropdown-item"
                to="/billing"
              >
                Billing
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/inventory"
              >
                Inventory
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/customerfeedback">
                Customer Feedback
              </Link>
            </li>
          </ul>
        </li>
        {/* Add-Ons Dropdown */}
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="addonsDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Add-Ons
          </Link>
          <ul className="dropdown-menu" aria-labelledby="addonsDropdown">
            <li>
              <Link className="dropdown-item" to="/captainapp">
                Captain App
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/kds">
                Kitchen Display System
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/scan">
                Scan &amp; Order
              </Link>
            </li>
          </ul>
        </li>
        {/* Outlet Format */}
        <li className="nav-item">
          <a className="nav-link" href="#products">
            Outlet Format
          </a>
        </li>
        {/* Pricing */}
        <li className="nav-item">
          <a className="nav-link" href="#reviews">
            Pricing
          </a>
        </li>
        {/* Resources */}
        <li className="nav-item">
          <a className="nav-link last-menu-item" href="#contact">
            Resources
          </a>
        </li>
      </ul>
    </div>
  </div>
  {/* / container */}
</nav>

   </>

  )
}

export default Header