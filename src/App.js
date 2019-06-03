
import React, {Component } from 'react';
import "./App.css";
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import * as math from 'mathjs';
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input: ""
    }
  }
  
addToInput = val => {
  this.setState({ input: this.state.input + val },()=>{
    console.log("entered input",this.state.input)
  });
}
addDecimalToInput = val => {
  //Only add decimall if there is no current
  // decimal point present in the input area
  if(this.state.input.indexOf(".") === -1){
      this.setState({ input: this.state.input + val });
  }
};
addZeroToInput = val => {
  // if this.state.input is not empty then add zero
  if(this.state.input !== "") {
    this.setState({ input: this.state.input + val });
  }
};



handleEqual = () => {
  try {
    this.setState({input: math.eval(this.state.input)});
}
catch(err) {
    alert('Cannnot perform the task');
}
  
}

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
        <Input input={this.state.input}></Input>
          <div className="row">
              <Button handleClick={this.addToInput}>7</Button>
              <Button handleClick={this.addToInput}>8</Button>
              <Button handleClick={this.addToInput}>9</Button>
              <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
              <Button handleClick={this.addToInput}>4</Button>
              <Button handleClick={this.addToInput}>5</Button>
              <Button handleClick={this.addToInput}>6</Button>
              <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
              <Button handleClick={this.addToInput}>1</Button>
              <Button handleClick={this.addToInput}>2</Button>
              <Button handleClick={this.addToInput}>3</Button>
              <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
              <Button handleClick={this.addDecimalToInput}>.</Button>
              <Button handleClick={this.addZeroToInput}>0</Button>
              <Button handleClick={() => this.handleEqual()}>=</Button>
              <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
          <ClearButton handleClear={() => this.setState({ input: ""})}>Clear</ClearButton>
          </div>
        </div>
      </div>
    )
}
}


export default App;
