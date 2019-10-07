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
        labels: ["Euphoric", "Happy", "Neutral", "Tense", "Sad"],
        colors: ["#D17B88", "#D999B9", "#B8B3E9", "#90E0F3", "#75F4F4"],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
                type: DonutChart,
              },
              legend: {
                position: 'bottom',
                
              }
            }
          }]
        },
        series: [23, 11, 54, 72, 12]
    }
}
render() {
    return (
    <div>
        <div className="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width="380" />
          </div>
          <div id="html-dist">
          </div>
        </div>
      );
    }
  }

  export default DonutChart