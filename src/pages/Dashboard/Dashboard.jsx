/* Dependencies */
import React from 'react'
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts'
import userService from '../../utils/userService';
import { thisTypeAnnotation } from '@babel/types';
/* Styles */
import './Dashboard.css';


class DonutChart extends React.Component {
    constructor(props) {
        super(props);
        let user = userService.getUser()
        let userTheme = user.themeColors
        this.state = {
            user: userService.getUser(),
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            month: "October",
            options: {
                labels: ["Euphoric", "Happy", "Neutral", "Tense", "Sad"],
                colors: userTheme,
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
            <div className="moodChartHeader">
                <button onClick={() => this.handleLastClick()}> <img className="arrows" src="images/appIcons/black_arrow_left.svg"></img></button>
                    <h1>{this.state.month}</h1>
                <button onClick={() => this.handleNextClick()}> <img className="arrows" src="images/appIcons/black_arrow_right.svg"></img></button>
            </div>
            <div className="moodChart" onLoad={() => this.setState({colors: this.state.user.themeColors}), console.log(this.state.user.themeColors)}>
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width="380" user={this.state.user} colors={this.state.colors} /> 
            </div>
        </div>
      );
    }
}


export default DonutChart