import "./HeroSection.css"

const HeroSection = ({title, subtitle}) => {
  return <div className="hero">
    <h1>{title}</h1>
     {subtitle && <p>{subtitle}</p>}
  </div>
}

export default HeroSection