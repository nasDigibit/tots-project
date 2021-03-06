import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class LineGraph extends Component {
    render() {
	const data = {
	    labels: this.props.lstOfNbrOfDays,
	    datasets: [
		{
		    label: 'Cycle',
		    fill: false,
		    lineTension: 0.1,
		    backgroundColor: 'rgba(75,192,192,0.4)',
		    borderColor: 'rgba(75,192,192,1)',
		    borderCapStyle: 'butt',
		    borderDash: [],
		    borderDashOffset: 0.0,
		    borderJoinStyle: 'miter',
		    pointBorderColor: 'rgba(75,192,192,1)',
		    pointBackgroundColor: '#fff',
		    pointBorderWidth: 1,
		    pointHoverRadius: 5,
		    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
		    pointHoverBorderColor: 'rgba(220,220,220,1)',
		    pointHoverBorderWidth: 2,
		    pointRadius: 1,
		    pointHitRadius: 10,
		    data: [40, 40, 40, 40, 50, 50, 50, 50, 60, 70, 100, 140, 200, 220, 200, 100, 80, 90, 100, 110, 110, 110, 110, 100, 100, 80, 60, 40]
		}
	    ]
	};

	return (
	    <Line 
		data={data} 
		width={100}
		height={100}
		options={
		    {maintainAspectRatio: false}
		}
	    />
	);
    }
}


export default LineGraph;
