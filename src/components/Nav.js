import { Link, Outlet } from 'react-router-dom'
import React from 'react'

function Nav() {
  return (
    <>
    {/* <div className='h-10 bg-nav-bg'>
      <nav>
        <ul className='text-nav-text'>
          <li>
            <Link to="/">Home</Link><Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      </div> */}

<nav className="flex items-center justify-between flex-wrap bg-nav-bg p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
    <svg className="fill-current h-8 w-8 mr-2" width="40" height="40" viewBox="0 0 204 204" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M95.7438 196.664C121.869 208.186 146.273 206.136 168.952 190.512C194.299 169.901 204.361 146.133 199.137 119.204C178.236 150.563 151.498 164.471 118.925 160.923C89.7971 153.278 71.3419 131.448 63.5599 95.4336C48.7729 112.278 45.6049 132.114 54.0549 154.939C61.0584 172.89 74.9558 186.799 95.7453 196.661M49.2179 53.215C31.2091 60.1949 17.2559 74.0479 7.36176 94.7693C-4.20005 120.81 -2.14316 145.133 13.5315 167.739C34.2089 193.005 58.0563 203.032 85.0721 197.824C53.6109 176.991 39.6577 150.343 43.2159 117.874C50.886 88.8413 72.788 70.4476 108.92 62.6911C92.0222 47.9524 72.1209 44.7943 49.2193 53.2162M118.926 6.01042C150.389 26.8434 164.34 53.4916 160.784 85.961C153.112 114.993 131.212 133.387 95.0796 141.143C111.979 155.882 131.879 159.04 154.78 150.618C172.791 143.638 186.744 129.785 196.638 109.064C208.2 83.0231 206.143 58.7001 190.469 36.0946C169.789 10.8284 145.942 0.801289 118.928 6.00924M149.613 49.0595C142.608 31.1069 128.712 17.2004 107.923 7.33838C81.7954 -4.18642 57.394 -2.1366 34.7144 13.4878C9.36718 34.1006 -0.69424 57.8691 4.53158 84.7951C25.4306 53.4346 52.1682 39.5282 84.7438 43.0739C113.871 50.7217 132.327 72.5514 140.109 108.564C154.896 91.7216 158.063 71.8859 149.615 49.0578L149.613 49.0595Z" fill="white"/>
</svg>


    <span className="font-semibold text-xl tracking-tight">PhotoStudio.</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-nav-text border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-nav-text hover:text-white mr-4">
        Home
      </Link>
      <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-nav-text hover:text-white mr-4">
        About
      </Link>
      <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-nav-text hover:text-white mr-4">
        Docs
      </Link>
    </div>
    <div className='space-x-5'>
      <Link to="/" className="inline-block text-sm px-4 py-2 leading-none border rounded text-main-bg bg-neon-green border-2 border-neon-green font-bold hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download image</Link>
      <Link to="/" className="inline-block text-sm px-4 py-2 leading-none border rounded text-neon-green border-neon-green font-bold border-2 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Back to landingpage</Link>

    </div>
  </div>
</nav>
      <Outlet/>
      </>
  )
}

export default Nav

