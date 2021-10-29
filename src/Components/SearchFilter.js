import axios from "axios";
import React, { useState, useEffect } from "react";
import "../Css/bootstrap.min.css";
import { Slider } from "@material-ui/core";


const SearchFilter = ({ setCar }) => {
  const [term, setTerm] = useState("");
  const [year, setYear] = useState("year");
  const [carInfo, setCarInfo] = useState([]);
  const [carType, setCarType] = useState("car");
  const [resultNumber, setResultNumber] = useState("Search");
  
  const [val, setVal] = useState([2005,2022])
  const updateRange=(e,data) => {
    setVal(data)
  }
  //get data from api
  const fetch = async (term, year, carType) => {
    const getCarInfo = await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${term}/modelyear/${year}/vehicletype/${carType}?format=json`
    );
    setCarInfo(getCarInfo.data.Results);
    setResultNumber("Found " + getCarInfo.data.Results.length + " Vehicles");
  };

  //make year and type button disable and enable
  useEffect(() => {
    if (carInfo.length > 0) {
      document.getElementById("selectYear").disabled = false;
      document.getElementById("selectType").disabled = false;
    } else {
      document.getElementById("selectYear").disabled = true;
      document.getElementById("selectType").disabled = true;
    }
  });
  //sending data to parent component
  useEffect(() => {
    setCar(carInfo);
  }, [carInfo]);

  //reset data
  useEffect(() => {
    setCarInfo([]);
    setResultNumber("Search");
    fetch(term, year, carType);
  }, [term, year, carType]);

  //clear function
  const onButtonClear = () => {
    setResultNumber("Search");
    setTerm("");
    setYear("year");
    setCarInfo([]);
    setCarType("car");
  };
  

  return (
    <div class="container card text-white bg-primary mb-3" >
  <div class="row justify-content-md2-center">
      <h3 class="card-header">Search your Car</h3>
       <div class="card-body">
          <h5 class="card-title">Search Make, Model, Year, Type etc...</h5>
      </div>
      <div class="search-car">
      <div class="form-group">
       <input
          class="form-control"
          placeholder="Search Make (Toyota, Honda, Tesla etc...)"
          value={term}
          type="text"
          onChange={(e) => setTerm(e.target.value)}
        />
        </div>
      
       <br /> 
      <div class="form-group">
        <select
          id="selectYear"
          class="form-select"
          placeholder="year"
          value={year}
          type="text"
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="year">Year</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
        </select>
        </div>
        <div style = {{width:300, margin:10}}>
        <Slider 
          value = {val}
          onChange = {updateRange}
          />
          </div>
       <div class="form-group">
        <select
          id="selectType"
          class="form-select"
          value={carType}
          type="text"
          onChange={(e) => setCarType(e.target.value)}
        >
          <option value="car">Type</option>
          <option value="car">Car</option>
          <option value="truck">Truck</option>
        </select>
        </div>
        <br />
        {/* <div class="row">
        <div class="col"> */}
          <button className="btn btn-primary  mr-3" type="button">
            <a>{resultNumber}</a>
          </button>
        {/* </div>
        <div class="col"> */}
          <button className="btn btn-danger  mr-3" type="button" onClick={onButtonClear}>
          Remove
          </button>
          <br />
          <p></p>
          {/* </div>
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default SearchFilter;
