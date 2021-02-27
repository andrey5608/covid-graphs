import React, * as react from "react";
import Chart from "@bit/nexxtway.react-rainbow.chart";
import Dataset from "@bit/nexxtway.react-rainbow.dataset";
import moment from "moment";
import { Dropdown } from "@bit/primefaces.primereact.dropdown";
import PrimereactStyle from "@bit/primefaces.primereact.internal.stylelinks";
import { Grid } from "@bit/bit.base-ui.layout.grid-component";
import "./App.css";

const apiEnpoint = `https://andrey5608.github.io/covid19/timeseries.json`;

export default class App extends react.Component {
  constructor() {
    super();
    this.refreshDataForCountry = this.refreshDataForCountry.bind(this);
    this.state = {
      dates: undefined,
      cases: undefined,
      deaths: undefined,
      recovered: undefined,
      country: "US",
      countries: undefined,
      russiaDates: undefined,
      russiaCases: undefined,
      russiaDeaths: undefined,
      russiaRecovered: undefined,
      apiData: undefined,
    };

    this.handlePickUp = this.handlePickUp.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async getApiData() {
    const response = await fetch(apiEnpoint).then((response) => {
      if (response.status !== 200) {
        console.log(`Bad response: "${response}"`);
      }
      return response;
    });

    const result = await response.json();
    this.setState({
      apiData: result,
    });
    var countries = [];

    try {
      Object.keys(result).forEach((x) =>
        countries.push({ label: x, value: x })
      );
      this.setState({ countries: countries });
    } catch (e) {
      console.error(`The country was unexpected. ${e}`);
    }
  }

  async refreshDataForCountry(country) {
    var countryResult = this.state.apiData[country];
    var dates = countryResult?.map((item) => {
      return moment(item.date, "YYYY-M-DD").format("DD.MM.YYYY");
    });
    var cases = countryResult?.map((item) => {
      return item.confirmed;
    });
    var deaths = countryResult?.map((item) => {
      return item.deaths;
    });
    var recovered = countryResult?.map((item) => {
      return item.recovered;
    });
    switch (country.toLowerCase()) {
      case "russia":
        this.setState({
          russiaDates: dates,
          russiaCases: cases,
          russiaDeaths: deaths,
          russiaRecovered: recovered,
        });
        break;
      default:
        this.setState({
          dates: dates,
          cases: cases,
          deaths: deaths,
          recovered: recovered,
        });
        break;
    }
  }

  async componentDidMount() {
    await this.getApiData();
    this.refreshDataForCountry("Russia");
    this.refreshDataForCountry("US");
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
          <Grid col={1} colSm={1}>
            <div style={containerStyles}>
              <h4>Russia</h4>
              <div>
                <Chart
                  labels={this.state.russiaDates}
                  type="line"
                  backgroundColor="white"
                >
                  <Dataset
                    title="Deaths"
                    values={this.state.russiaDeaths}
                    backgroundColor="red"
                    borderColor="red"
                  />
                  <Dataset
                    title="Total cases"
                    values={this.state.russiaCases}
                    backgroundColor="whitesmoke"
                    borderColor="whitesmoke"
                  />
                  <Dataset
                    title="Recovered"
                    values={this.state.russiaRecovered}
                    backgroundColor="green"
                    borderColor="green"
                  />
                </Chart>
              </div>
            </div>
            <div style={containerStyles}>
              <h4>Others</h4>
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
          </Grid>
        </div>
      </div>
    );
  }
}
