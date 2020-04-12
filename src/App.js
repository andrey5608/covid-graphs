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
      country: "Russia",
    };
    this.handleChange = this.handleChange.bind(this);
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

    var dates = [];
    var cases = [];
    var deaths = [];
    var recovered = [];

    try{
      result[country].forEach(item => {
        dates.push(moment(item.date, "YYYY-M-DD").format("DD.MM.YYYY"));
        cases.push(item.confirmed);
        deaths.push(item.deaths);
        recovered.push(item.recovered);          
      });
    }
    catch(e){
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

  async handleChange(event) {
    await this.refreshDataForCountry(event.target.value);
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
          COVID-19 statistics provided by
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
              <input type="radio" value="US" name="country" /> United States
            </div>
          </div>
        </div>
      </div>
    );
  }
}
