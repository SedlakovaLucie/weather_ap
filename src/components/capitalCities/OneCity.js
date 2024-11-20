import "./OneCity.css";

const OneCity = ({ city, temperature, image }) => {
  return <div className="one-city">
      <img src={image} alt={`Fotografie města ${city}`} />
      <h3>{city}</h3>
      <p>Teplota: {temperature} °C</p>
    </div>
};

export default OneCity;
