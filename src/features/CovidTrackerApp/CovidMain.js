import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton, Card } from "react-bootstrap";
import numeral from "numeral";
import ClipLoader from "react-spinners/ClipLoader";
import { InfoBox } from "./components/InfoBox";
import { CovidMap } from "./components/CovidMap";
import { CovidTable } from "./components/CovidTable";
import { sortCovidTable, prettyPrintStat } from "../../Utils";
import { CovidChart } from "./components/CovidChart";
import "leaflet/dist/leaflet.css";

function CovidTrackerApp() {
  const [countries, setCountries] = useState(new Map());
  const [country, setCountry] = useState("WW");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          let countriesMap = new Map();
          countriesMap["WW"] = "World Wide";
          data.forEach((country) => {
            countriesMap[country.countryInfo.iso2] = country.country;
          });
          const sortedData = sortCovidTable(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countriesMap);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event, eventKey) => {
    const countryCode = event;
    // console.log("YOOOO", event);
    // console.log("asdfaOOOO", eventKey);
    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };
  return (
    <div className="covid-main">
      <div className="covid-left-side">
        <div className="covid-header">
          <DropdownButton id="dropdown-basic-button" onSelect={onCountryChange} title={countries[country]}>
            {/* <Dropdown.Item eventKey="worldwide">World Wide</Dropdown.Item> */}
            {Object.keys(countries).map((countryCode, index) => (
              <Dropdown.Item eventKey={countryCode}>{countries[countryCode]}</Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
        <div className="covid-stats">
          <InfoBox
            isRed
            active={casesType === "cases"}
            onClick={(e) => setCasesType("cases")}
            title="Coronavirus Cases"
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={numeral(countryInfo.cases).format("0.0a")}
          />
          <InfoBox
            active={casesType === "recovered"}
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")}
          />
          <InfoBox
            isRed
            active={casesType === "deaths"}
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={numeral(countryInfo.deaths).format("0.0a")}
          />
        </div>
        <CovidMap casesType={casesType} countries={mapCountries} center={mapCenter} zoom={mapZoom} />
      </div>
      <Card className="covid-right-side">
        <Card.Body className="covid-information">
          <Card.Title>Live Cases by Country</Card.Title>
          <CovidTable countries={tableData} />
          <Card.Title className="covid-chart-title"> Worldwide new {casesType}</Card.Title>
          <CovidChart casesType={casesType} />
          {/* <Card.Title>{title}</Card.Title>
        <Card.Text>{cases}</Card.Text>
        <Card.Text>{total}</Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default CovidTrackerApp;
