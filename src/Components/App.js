import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import Header from "./Header";
import FooterTop from "./footer_top";
import CarCard from "./CarCard";

import "../Css/bootstrap.min.css";
import img1 from '../Images/car6.jpg';


const App = () => {
  const [carInfo, setCarInfo] = useState([]);

  const setCar = (val) => {
    setCarInfo(val);
  };

  return (
    <div className="hero">
      <Header />
      <img src={img1} width="100%"  height="100%"  />
      <div class="top">
        <br/>
        <br/>
      </div>
        <SearchFilter setCar={setCar} style={{ width: '18rem' }}/>
      <br/>
        <CarCard lists={carInfo} />
        <br/>
        <br/>
        <br/>
        <br/>
        <FooterTop />
    </div>
    
  );
};

export default App;
