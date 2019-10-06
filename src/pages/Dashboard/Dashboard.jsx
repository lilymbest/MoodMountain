import React from 'react'
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts'
import ApexCharts from 'apexcharts'
import NavBarTop from '../../components/NavBarTop/NavBarTop'
import NavBarBottom from '../../components/NavBarBottom/NavBarBottom'

class DonutChart extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        options: {
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        series: [44, 55, 41, 17, 15],
        labels: ['Euphoric', 'Happy', 'Neutral', 'Tense', 'Sad'],
      }
    }

    render() {
      return (
        <div>
          <div className="chart">
          <ReactApexChart labels={this.state.labels} options={this.state.options} series={this.state.series} type="donut" width="380" />
          </div>
          <div id="html-dist">
          </div>
        </div>
      );
    }
  }

  export default DonutChart