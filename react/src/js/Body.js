import React from "react";

export default class Body extends React.Component {
  constructor(){
    super(); 
    this.state ={counter: 0,}; 
  }

  time(){
    this.setState({
      counter: this.state.counter + 1
    });
  }

  
  componentDidMount(){
    setInterval(
      () => this.time()
     , 1000);  
  }


  render() {
    return (
      <div>
          <p> {this.state.counter} </p>

      </div>
    );
  }
}
