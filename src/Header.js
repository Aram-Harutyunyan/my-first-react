import React, { Component } from 'react';
import arrowleft from "./icons8-arrow-pointing-left-100.png";
import arrowright from "./icons8-arrow-100.png";
import rectangle from "./icons8-rectangle-96.png";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
    // this.changeCount = this.changeCount.bind(this)
  }
  minusCount = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }
  plusCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div className="arrows">
        <img src={arrowleft} onClick={this.minusCount}></img>
        hi {this.state.count}
        <img src={rectangle}></img>
        <img src={arrowright} onClick={this.plusCount}></img>
      
        
        <button onClick={this.changeCount}>Click on me</button>
        hi {this.state.count2}
      </div>
    )
  }
}
export default Header;