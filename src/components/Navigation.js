import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand">
        <div className="container">
          <Link class="navbar-brand" to="/">
            React Redux-Saga Blog
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
