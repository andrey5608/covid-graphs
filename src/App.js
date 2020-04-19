import React, { Component } from "react";
import Chart from "@bit/nexxtway.react-rainbow.chart";
import Dataset from "@bit/nexxtway.react-rainbow.dataset";
import moment from "moment";
import { Dropdown } from "@bit/primefaces.primereact.dropdown";
import PrimereactStyle from "@bit/primefaces.primereact.internal.stylelinks";
import "./App.css";

const apiEnpoint = `https://andrey5608.github.io/covid19/timeseries.json`;

export default class App extends Component {
  constructor() {
    super();
    this.refreshDataForCountry = this.refreshDataForCountry.bind(this);
    this.state = {
      dates: undefined,
      cases: undefined,
      deaths: undefined,
      recovered: undefined,
      country: "Russia",
      countries: undefined,
    };

    this.handlePickUp = this.handlePickUp.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async refreshDataForCountry(country) {
    const response = await fetch(apiEnpoint).then((response) => {
      if (response.status !== 200) {
        throw new Error(`Bad response: "${response}"`);
      }
      return response;
    });

    const result = await response.json();

    var countries = [];
    var dates = [];
    var cases = [];
    var deaths = [];
    var recovered = [];

    try {
      Object.keys(result).forEach((x) =>
        countries.push({ label: x, value: x })
      );
      this.setState({ countries: countries });
      result[country].forEach((item) => {
        dates.push(moment(item.date, "YYYY-M-DD").format("DD.MM.YYYY"));
        cases.push(item.confirmed);
        deaths.push(item.deaths);
        recovered.push(item.recovered);
      });
    } catch (e) {
      console.error(`The country '${country}' was unexpected. ${e}`);
      alert(`The country '${country}' was unexpected`);
    }

    this.setState({
      dates: dates,
      cases: cases,
      deaths: deaths,
      recovered: recovered,
    });
  }

  async componentDidMount() {
    await this.refreshDataForCountry(this.state.country);
  }

  async handlePickUp(value) {
    console.log(value);
    await this.refreshDataForCountry(value);
  }

  componentWillUnmount() {
    this.interval = null;
  }

  render() {
    const containerStyles = {
      width: 900,
    };

    return (
      <div className="App">
        <PrimereactStyle />
        <header className="App-header">
          COVID-19 statistics provided by
          <a href="https://github.com/CSSEGISandData/COVID-19">
            Johns Hopkins CSSE
          </a>
        </header>
        <div className="App-main">
          <div style={containerStyles}>
            <div>
              <Chart
                labels={this.state.dates}
                type="line"
                backgroundColor="white"
              >
                <Dataset
                  title="Deaths"
                  values={this.state.deaths}
                  backgroundColor="red"
                  borderColor="red"
                />
                <Dataset
                  title="Total cases"
                  values={this.state.cases}
                  backgroundColor="whitesmoke"
                  borderColor="whitesmoke"
                />
                <Dataset
                  title="Recovered"
                  values={this.state.recovered}
                  backgroundColor="green"
                  borderColor="green"
                />
              </Chart>
            </div>
            <div>
              <Dropdown
                style={{ width: 150 }}
                value={this.state.country}
                options={this.state.countries}
                onChange={(e) => {
                  this.setState({ country: e.value });
                  this.handlePickUp(e.value);
                }}
                placeholder="Select a country"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
