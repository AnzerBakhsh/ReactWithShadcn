import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'

function Header() {
  const location = useLocation()
  
  return (
    <nav className='flex justify-between items-center px-4 md:px-8'>
    <Link to="/">
      <img src="./logo.png" alt="logo" className=' h-12 md:h-20' />
    </Link>
    <div className='flex items-center space-x-2 '> 
    {location.pathname !== '/post-job' && location.pathname !== '/onboarding' && location.pathname !== '/login' && (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
      
      {location.pathname !== '/post-job' && location.pathname !== '/Onboarding' && (
        <Link to="/post-job">
          <Button variant="destructive" className="rounded-full">
            <PenBox size={20} className='mr-2' />
            Post Job
          </Button>
        </Link>
      )}
    </div>
  </nav>
  
  )
}

export default Header
