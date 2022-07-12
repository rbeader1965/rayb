import React from 'react'
import Navbar from './Navbar';

export const Layout = ({children}) => {
  return (
    <div className='w-auto'>
   <Navbar />
   { children }
    </div>
    
  );
}
