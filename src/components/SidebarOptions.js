import React from 'react'

function SidebarOptions({ name, active, handleClick}) {
    return (
      <>

      <li>
            <div className={`sidebar-item cursor-pointer flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 ${active ? 'active' : ''}`}onClick={handleClick} >
               <svg aria-hidden="true" className="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span className='pl-3'>{name}</span>
            </div>
         </li>
      </>
    )
}

export default SidebarOptions