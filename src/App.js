import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      display:'0'
    }
    this.changeValue = this.changeValue.bind(this);
    this.equalEval = this.equalEval.bind(this);
  }

  changeValue(event){
    if(event.target.value==='CE'){
      this.setState({display: '0'});
    }else{
      this.setState({
        display: (this.state.display==="0" ? event.target.value : this.state.display + event.target.value)
      });
    }

  }

  equalEval(){
    this.setState({
        display: eval(this.state.display)
    });
  }

  render() {
    return (
      <div className="App">

        <div className="calculator">
      		<div className="numinput">{this.state.display}</div>
      		<div className="buttongrid">

            <button value="(" id="leftBrackets" onClick={this.changeValue}>(</button>
            <button value=")" id="rightBrackets" onClick={this.changeValue}>)</button>
            <button value=" % " id="percentage" onClick={this.changeValue}>%</button>
            <button value="CE" id="divide" className="commands" onClick={this.changeValue}>CE</button>

            <button value="7" id="number7" onClick={this.changeValue}>7</button>
            <button value="8" id="number8" onClick={this.changeValue}>8</button>
            <button value="9" id="number9" onClick={this.changeValue}>9</button>
            <button value=" / " id="divide" className="operations" onClick={this.changeValue}>&divide;</button>

            <button value="4" id="number4" onClick={this.changeValue}>4</button>
            <button value="5" id="number5" onClick={this.changeValue}>5</button>
            <button value="6" id="number6" onClick={this.changeValue}>6</button>
            <button value=" * " id="mult" className="operations" onClick={this.changeValue}>x</button>

            <button value="1" id="number1" onClick={this.changeValue}>1</button>
            <button value="2" id="number2" onClick={this.changeValue}>2</button>
            <button value="3" id="number3" onClick={this.changeValue}>3</button>
            <button value=" - " id="sub" className="operations" onClick={this.changeValue}>-</button>

            <button value="." id="dot" onClick={this.changeValue}>.</button>
            <button value="0" id="number0" onClick={this.changeValue}>0</button>
            <button value=" = " id="result" onClick={this.equalEval}>=</button>
            <button value=" + " id="sum" className="operations" onClick={this.changeValue}>+</button>

      		</div>

      </div>


      </div>
    );
  }
}

export default App;
