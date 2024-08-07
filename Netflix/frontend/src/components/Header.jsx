import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"
import useAuthCheck from '../hooks/useAuthCheck';

const Header = () => {
  const { signed, dropVisible, handleClick, handleSignOut } = useAuthCheck();

  return (
    <div>
      <header className='w-full fixed bg-gradient-to-b from-black z-20 flex justify-between px-4'>
        <a href='/'><div
          // src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          // alt='netflix-logo'
          className='w-1/4 md:w-1/6 py-5 md:mx-20 text-3xl text-red-600 font-serif'
        >CineStreamGPT</div></a>
        {signed && (
          <div className="flex  flex-col">
            <img
              src="https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
              alt='user-logo'
              className='w-8 h-8 md:w-10 md:h-10 m-5 mt-8 cursor-pointer'
              onClick={handleClick}
            />
            {dropVisible && (
              <div className="relative inline-block">
                <div className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-gray-800 text-white rounded-md shadow-xl">
                  <Link to="/main" className="block px-4 py-3 hover:bg-gray-700">Home</Link>
                  <Link to="/moviegpt" className="block px-4 py-3 hover:bg-gray-700">Movie suggestions</Link>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-700" onClick={() => toast.error("No data available right now")}>Settings</a>
                  <a href="#" onClick={handleSignOut} className="block px-4 py-3 hover:bg-gray-700">Sign Out</a>
                </div>
              </div>
            )}
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
