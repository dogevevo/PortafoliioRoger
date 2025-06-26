import React from 'react'
import { ThemeToogle } from '../components/ThemeToogle'
import { StarBackground } from '../components/StarBackground'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ContactSection } from '../components/ContactSection'

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
          <AboutSection />
          <SkillsSection />
          <ProjectsSection /> 
          <ContactSection /> 
        </main>
        {/* Footer */}

    </div>
  )
}
