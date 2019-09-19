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
    guestAtBat: true,
    homeAtBat: false
  };

  resetPosession = () => {
    this.setState({
      ball: 0,
      strike: 0
    });
  };
  resetAll = () => {
    this.setState({
      ball: 0,
      strike: 0,
      outs: 0,
      guestAtBat: !this.state.guestAtBat,
      homeAtBat: !this.state.homeAtBat
    });
  };

  nextPossession = () => {
    if (this.state.outs === 3) {
      alert("You have 3 OUTS! Next Team at Bat!");
      this.resetAll();
    } else {
      this.setState({
        outs: this.state.outs + 1
      });
      alert("Out!");

      this.resetPosession();
    }
  };

  handleClick = () => {
    const {
      strike,
      ball,
      outs,
      guestAtBat,
      guestScore,
      homeAtBat,
      homeScore
    } = this.state;

    const play = Math.random() * 100;
    console.log(play);

    /////////////////////////////////////
    /////////////////////////// IF STRIKE
    if (play < 45) {
      if (strike < 3 && outs < 3 && ball < 4) {
        this.setState({
          strike: strike + 1
        });
        alert("Strike!");
      } else if (strike > 2 && outs < 3 && ball < 4) {
        this.setState({
          outs: outs + 1
        });
        alert("Out!");
        this.resetPosession();
      }
    }
    /////////////////////////////////////
    /////////////////////////// IF BALL
    else if (play > 45 && play < 90) {
      if (ball < 4 && outs < 3 && strike < 3) {
        this.setState({
          ball: ball + 1
        });
        alert("Ball!");
      } else if (ball > 3 && outs < 3 && strike < 3) {
        this.setState({
          ball: ball + 1,
          outs: outs + 1
        });
        alert("Out!");
        this.resetPosession();
      }
    }
    /////////////////////////////////////
    ////////////////////////// IF HOMERUN
    else if (play > 90) {
      if (guestAtBat) {
        if (strike < 3 && ball < 4) {
          this.setState({
            guestScore: guestScore + 1
          });
          alert("Guest Team Homerun!");
          this.resetPosession();
        }
      } else if (homeAtBat) {
        if (strike < 3 && ball < 4) {
          this.setState({
            homeScore: homeScore + 1
          });
          alert("Home Team Homerun!");
          this.resetPosession();
        }
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
        {ball === 4 || strike === 3 || outs === 3 ? (
          <button onClick={this.nextPossession}>
            {outs === 3 ? "Click for Next TEAM!" : "Click for Next Possession!"}
          </button>
        ) : (
          <button onClick={this.handleClick}>Play Ball!</button>
        )}
        <div
          className="at-bat"
          style={{ color: "green", fontWeight: "bolder" }}
        >
          At Bat: {guestAtBat ? "Guest" : "Home"}
        </div>

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
