import React from 'react'
import { Link } from 'react-router-dom'
import "./Error.css"
import HeroSection from "../components/common/HeroSection"

const Error = () => {
  return <div className='error-container'>
  <HeroSection title="Error 404" subtitle="Je nám líto, ale stránka kterou hledáte, neexistuje."/>
  <button className='error-button'>
    <Link to="/">Hlavní stránka</Link>
  </button>
  </div>
}

export default Error