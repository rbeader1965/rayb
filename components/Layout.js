import React from 'react'
import Navbar from './Navbar';

export const Layout = ({children}) => {
  return (
    <div className='w-full'>
   <Navbar />
   { children }
    </div>
    
  );
}
