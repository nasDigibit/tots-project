import React from 'react';
import ReactHighcharts from 'react-highcharts/bundle/ReactHighcharts';
import RedrawOnPrint from 'react-highcharts/dist/RedrawOnPrint';

class LineHighchart extends React.Component {
  render() {
    var config = {
      title: {
    text: this.props.title
},
      xAxis: {
        categories: this.props.lstOfDates,
        max: this.props.nbrOfDays
      },
      series: [{ data: this.props.cycle }]
    };

    return (
      <RedrawOnPrint>
        <ReactHighcharts config={config} />
      </RedrawOnPrint>
    );
  }
}



export default LineHighchart;
