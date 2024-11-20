import "./TabContent.css";
import { useState } from "react";
import categories from "./categories";
import { Link } from "react-router-dom";

const TabContent = () => {
  const [weatherDescription, setWeatherDescription] = useState("teplota");

  const content = {
    teplota:
      "Teplota vyjadřuje, jak teplý nebo studený je vzduch v daném místě. Měří se v °C (stupních Celsia) a je klíčovým faktorem pro určení pocitu počasí.",
    "pocitová teplota":
      "Pocitová teplota zohledňuje vlivy, jako je vítr a vlhkost, které mohou ovlivnit, zda nám připadá tepleji nebo chladněji, než je naměřená teplota. Měří se v °C a poskytuje přesnější odhad, jak se budeme cítit.",
    oblačnost:
      "Oblačnost udává, jak velká část oblohy je pokrytá mraky a měří se v procentech (%). Nižší hodnoty (např. 0–20 %) znamenají převážně jasnou oblohu, zatímco vyšší hodnoty (80–100 %) značí úplně zataženou oblohu.",
    vítr: "Rychlost větru se měří v metrech za sekundu (m/s). Vítr při vyšších rychlostech ovlivňuje bezpečnost venkovních aktivit. Jako mírný vánek se uvádí vítr (0–2 m/s), silnější vítr (nad 10 m/s) a vítr (nad 15 m/s) může být nebezpečný. ",
  };

  return (
    <div className="description-section">
      <h2>Ukazetelé počasí</h2>
      <div className="tab-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setWeatherDescription(category)}
            className={weatherDescription === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <p>{content[weatherDescription]}</p>
      </div>
      <div className="link-content">
        <Link to="/form">Zobrazit počasí podle lokality</Link>
      </div>
    </div>
  );
};

export default TabContent;
