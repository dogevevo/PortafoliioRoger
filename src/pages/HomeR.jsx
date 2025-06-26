import React from 'react'
import { ThemeToogle } from '../components/ThemeToogle'
import { StarBackground } from '../components/StarBackground'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'

export const Home = () => {
  return (
    <div className='min-h-scren bg-background text-foreground overflow-x-hidden'>
        {/* Theme Toogle */}
        <ThemeToogle/>
        {/* Background effects */}
        <StarBackground/> 
        {/*  Navbar */}
        <Navbar/>
        {/* Main content */}
        <main>
          <HeroSection /> 
        </main>
        {/* Footer */}

    </div>
  )
}
