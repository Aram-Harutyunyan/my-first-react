import React, { Component } from 'react';
class Header extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      count2: 0,
    }
    // this.changeCount = this.changeCount.bind(this)
  }
  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
      count2: this.state.count2 + 5,
    })
  }
  render() {
    return (
      <div>
        hi {this.state.count}
        <button onClick={this.changeCount}>Click on me</button>
        hi {this.state.count2}
      </div>
    )
  }
}
export default Header;