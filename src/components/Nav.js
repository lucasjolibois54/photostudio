import { Link, Outlet } from 'react-router-dom'
import React from 'react'

function Nav() {
  return (
    <>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link><Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      </div>
      <Outlet/>
      </>
  )
}

export default Nav