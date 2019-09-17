import React, { Component } from "react";
import Display from "./components/Display/Display";
import "./App.scss";

class App extends Component {
  state = {
    ball: 0,
    strike: 0,
    outs: 0,
    homerun: 0,
    guestScore: 0,
    homeScore: 0,
    guestAtBat: false,
    homeAtBat: false,
    btnLabel: "Play Ball!"
  };

  resetPosession = () => {
    this.setState({
      ball: 0,
      strike: 0
    });
  };

  handleClick = () => {
    const play = Math.random() * 100;
    console.log(play);

    if (this.state.strike > 2 || this.state.ball > 3) {
      this.resetPosession();
      this.setState({
        btnLabel: "Click for Next Possession"
      });
    } else if (this.state.strike < 3) {
      if (play < 33) {
        this.setState({
          strike: this.state.strike + 1,
          btnLabel: "Play Ball!"
        });
      } else if (play > 33 && play < 66) {
        this.setState({
          ball: this.state.ball + 1,
          btnLabel: "Play Ball!"
        });
      } else {
        this.setState({
          guestScore: this.state.guestScore + 1,
          homeScore: this.state.homeScore + 1,
          btnLabel: "Play Ball!"
        });
      }
    }
  };

  render() {
    const {
      ball,
      strike,
      outs,
      homerun,
      guestScore,
      homeScore,
      guestAtBat,
      homeAtBat
    } = this.state;

    return (
      <div className="App">
        <button onClick={this.handleClick}>{this.state.btnLabel}</button>
        <Display
          ball={ball}
          strike={strike}
          outs={outs}
          homerun={homerun}
          guestScore={guestScore}
          homeScore={homeScore}
          guestAtBat={guestAtBat}
          homeAtBat={homeAtBat}
        />
      </div>
    );
  }
}

export default App;
