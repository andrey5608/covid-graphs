import React, { Component } from "react";
import Chart from "@bit/nexxtway.react-rainbow.chart";
import Dataset from "@bit/nexxtway.react-rainbow.dataset";
import moment from "moment";
import './App.css';

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
      country: "russia",
    };
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async refreshDataForCountry(country) {
    const res = await fetch(apiEnpoint).then((response) => {
      if (response.status !== 200) {
        throw new Error(`Bad response: "${response}"`);
      }
      return response;
    });
    const result = await res.json();

    var dates;
    var cases;
    var deaths;
    var recovered;

    switch (country.toLowerCase()) {
      case "russia":
        dates = result.Russia.map(function (item) {
          return moment(item.date, "YYYY-M-DD").format("DD.MM.YYYY");
        });
        cases = result.Russia.map(function (item) {
          return item.confirmed;
        });
        deaths = result.Russia.map(function (item) {
          return item.deaths;
        });
        recovered = result.Russia.map(function (item) {
          return item.recovered;
        });
        break;
      case "usa":
        dates = result.US.map(function (item) {
          return moment(item.date).format("DD.MM.YYYY");
        });
        cases = result.US.map(function (item) {
          return item.confirmed;
        });
        deaths = result.US.map(function (item) {
          return item.deaths;
        });
        recovered = result.US.map(function (item) {
          return item.recovered;
        });
        break;
      default:
        console.error(country + " was unexpected");
        break;
    }

    this.setState({
      dates: dates,
      cases: cases,
      deaths: deaths,
      recovered: recovered,
    });
  }

  async componentDidMount() {
    await this.refreshDataForCountry("russia");
  }

  async handleChange(event) {
    if (event.target.value.toLowerCase() === "russia") {
      await this.refreshDataForCountry("russia");
    } else {
      await this.refreshDataForCountry("usa");
    }
  }

  componentWillUnmount() {
    this.interval = null;
  }

  render() {
    const containerStyles = {
      width: 900
    };

    return (
      <div className="App">
        <header className="App-header">
          COVID-19 statistics provided by{" "}
          <a href="https://github.com/CSSEGISandData/COVID-19">
            Johns Hopkins CSSE
          </a>
        </header>
        <div className="App-main">
          <div style={containerStyles}>
            <div>
              <Chart labels={this.state.dates} type="line">
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
            <div onChange={(event) => this.handleChange(event)}>
              <input
                type="radio"
                value="Russia"
                name="country"
                defaultChecked="checked"
              />
              Russia
              <input type="radio" value="USA" name="country" /> United States
            </div>
          </div>
        </div>
      </div>
    );
  }
}
