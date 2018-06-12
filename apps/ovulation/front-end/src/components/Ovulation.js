import React, { Component } from 'react';
import MyForm from './DayPickerInput';
import LineHighchart from './LineHighchart';


class Ovulation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Ovulation',
      nbrOfDays: 0,
      cycle: [],
      lstOfDates: []
    }
  }

  handleSubmit = (nbrOfDays, selectedDay) => {
    let lst = [];
    let oneDay = 86400000;
    const options = { weekday: 'short', month: 'long', day: 'numeric' };

    for (let i = 0; i <= nbrOfDays; i++) {
      let milliseconds = selectedDay.getTime();
      milliseconds += oneDay * i;
      let date = new Date(milliseconds);
      lst.push(date.toLocaleDateString('fr-FR', options));
    }

    let ovulation = Math.round(nbrOfDays / 2);
    let cycle = [];

    for (let i = 0; i <= nbrOfDays; i++) {
      if (i === ovulation) {
        cycle[i] = ovulation;
      } else if (i === (ovulation - 1) || i === (ovulation + 1)) {
        cycle[i] = ovulation - 1;
      } else if (i === (ovulation - 2) || i === (ovulation + 2)) {
        cycle[i] = ovulation - 2;
      } else if (i === (ovulation - 3) || i === (ovulation + 3)) {
        cycle[i] = ovulation - 3;
      } else if (i < 5 || i === (nbrOfDays - 2) || i === nbrOfDays) {
        cycle[i] = 4;
      } else {
        cycle[i] = 6;
      }
    }

    console.log('ovulation ' + ovulation);
    console.log('lst ' + lst);
    console.log('typeof  ' + typeof nbrOfDays)

    this.setState({
      nbrOfDays: nbrOfDays,
      cycle: cycle,
      lstOfDates: lst
    });
    console.log('typeof  ' + nbrOfDays)
  }

  render() {
    const nbrOfDays = this.state.nbrOfDays;
    return (
      <div className="row">
        <div className="form-group registration-date">
        <MyForm onHandleSubmit={this.handleSubmit} />
        </div>
        <div className="form-group registration-date">
        <LineHighchart title = {this.state.title} nbrOfDays={nbrOfDays} cycle={this.state.cycle} lstOfDates={this.state.lstOfDates} />
      </div>
      </div>
    );
  }
}

export default Ovulation;
