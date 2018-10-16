import React, { Component } from "react";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      debts: [],
      debtName: "",
      debtApr: 0.0,
      amount: "",
    };
  }

  handleFormChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <GlobalHeader />
        <DebtEntryForm handleFormChange={this.handleFormChange} />
        {this.props.children}
      </div>
    );
  }
}

const GlobalHeader = () => {
  return <header className="App-header"> React Debt Calculator </header>;
};

const DebtEntryForm = ({ handleFormChange }) => {
  return (
    <div className="App-form">
      <FormControl>
        <InputLabel htmlFor="debt-name">Name</InputLabel>
        <Input id="debt-name" onChange={handleFormChange("debtName")} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="debt-apr">Apr</InputLabel>
        <Input id="debt-apr" onChange={handleFormChange("debtApr")} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="debt-apr">Amount</InputLabel>
        <Input id="debt-apr" onChange={handleFormChange("amount")} />
      </FormControl>
    </div>
  );
};
