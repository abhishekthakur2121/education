
  import React, { use } from 'react'
  import { assets } from '../../assets/assets'
  import { Link } from 'react-router-dom'
   import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

  const Navbar = () => {
    const isCourseListPage = location.pathname.includes('/course-list');
    const {openSignIn} = useClerk()
    const {user} = useUser()
    return (
      <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-300 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
        <img src={assets.logo} alt="Logo" className="w-28 lg:w-32 cursor-pointer" />
        
        <div className="hidden md:flex items-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            {
              user && <>
              <button className="hover:text-blue-600 transition-colors">Become Educator</button>
              |
            <Link to="/My-enrollment" className="hover:text-blue-600 transition-colors">My Enrollment</Link>
            </>
            }
          </div>
          {
          user ? <UserButton/> :
          
            <button onClick={()=>{
            openSignIn()
          }}className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            SignUp/SignIn</button>
            }
        </div>
          {/* Mobile View */}
        <div className="md:hidden flex items-center gap-2 sm:gap-4 text-gray-500 text-xs sm:text-sm">
          <div className="flex items-center gap-1 sm:gap-2 max:sm:text-xs">
             {
               user && <>
           <button className="hover:text-blue-600 transition-colors">Become Educator</button>
           <span className="text-gray-300 px-1">|</span>
           <Link to="/My-enrollment" className="hover:text-blue-600 transition-colors">My Enrollment</Link>
           </>
            }
          </div>
          {
            user ? <UserButton /> : 
            <button onClick={()=>{
            openSignIn()
          }}>
            <img src={assets.user_icon} alt="user icon" className="w-6 h-6" />
          </button>
          }
        </div>
      </div>
    );
  };

  export default Navbar;
 