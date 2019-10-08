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
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        month: "October",
        options: {
        labels: ["Euphoric", "Happy", "Neutral", "Tense", "Sad"],
        colors: ["#75F4F4", "#90E0F3", "#B8B3E9", "#D999B9", "#D17B88"],
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
        series: [20, 20, 20, 20, 20]
    }
}
handleLastClick() {
    this.setState({month:"September"})
}
handleNextClick(){
    this.setState({month:"November"})
}
render() {
    return (
    <div>
        <div className="chart">
        <button onClick={() => this.handleLastClick()}>Last Month</button><h1>{this.state.month}</h1><button onClick={() => this.handleNextClick()}>Next Month</button>
          <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width="380" />
          </div>
          <div id="html-dist">
          </div>
        </div>
      );
    }
  }

  export default DonutChart