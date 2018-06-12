import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import Button from '@material-ui/core/Button';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import "react-day-picker/lib/style.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined,
      value: 0,
      nextPeriod: undefined,
      ovulationDay: undefined
    };
  }

  handleDayChange = day => {
    this.setState({ selectedDay: day });
  };

  handleChange = event => {
    let nbrOfDays = parseInt(event.target.value, 10);
    this.setState({ value: nbrOfDays });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.selectedDay || !this.state.value) return;

    const day = this.state.selectedDay;
    const d = day.getTime();

    const daysToMilliseconds = parseInt(this.state.value, 10) * 86400000;

    const ovulation = new Date(d + parseInt(daysToMilliseconds / 2, 10));

    const date = new Date(d + daysToMilliseconds);

    console.log("valueeeeeee " + typeof this.state.value);
    console.log("valueeeeeee " + this.state.value);

    this.props.onHandleSubmit(this.state.value, this.state.selectedDay);

    this.setState({
      ovulationDay: ovulation,
      nextPeriod: date
    });
  };

  render() {
    const { selectedDay } = this.state;
    const { ovulationDay } = this.state;
    const { nextPeriod } = this.state;
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };

    return (
      <form inline onSubmit={this.handleSubmit}>
        
       
        1er jour de vos dernières regles :   
        <DayPickerInput onDayChange={this.handleDayChange} />
        <label>
          Durée moyenne de vos cycles:
          
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
          </select>
        </label>
        <input type="submit" value="Valider"/ >
        <hr className="clearfix w-100 d-md-none" />
        <div text-align>
        {selectedDay && (
          <p> jour regle: {selectedDay.toLocaleDateString("fr-FR", options)}</p>
        )}
        {ovulationDay && (
          <p> Ovulation: {ovulationDay.toLocaleDateString("fr-FR", options)}</p>
        )}
        {nextPeriod && (
          <p> Prochain: {nextPeriod.toLocaleDateString("fr-FR", options)}</p>
        )}
        </div>
      </form>
    );
   
  }
}
