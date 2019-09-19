import React, { Component } from "react";
import Display from "./components/Display/Display";
import "./App.scss";

class App extends Component {
  state = {
    ball: 0,
    strike: 0,
    outs: 0,
    guestScore: 0,
    homeScore: 0,
    guestAtBat: true,
    homeAtBat: false,
    guestInning: 1,
    guestInningTotal: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0
    },
    homeInning: 1,
    homeInningTotal: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0
    },
    inningHRCounter: 0
  };

  resetPosession = () => {
    this.setState({
      ball: 0,
      strike: 0
    });
  };
  resetAll = () => {
    if (this.state.guestAtBat) {
      this.setState({
        ball: 0,
        strike: 0,
        outs: 0,
        guestAtBat: !this.state.guestAtBat,
        homeAtBat: !this.state.homeAtBat,

        guestInning: this.state.guestInning + 1,
        inningHRCounter: 0
      });
    } else {
      this.setState({
        ball: 0,
        strike: 0,
        outs: 0,
        guestAtBat: !this.state.guestAtBat,
        homeAtBat: !this.state.homeAtBat,

        homeInning: this.state.homeInning + 1,
        inningHRCounter: 0
      });
    }
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
      homeScore,
      guestInningTotal,
      guestInning,
      homeInningTotal,
      homeInning,
      inningHRCounter
    } = this.state;

    const play = Math.random() * 100;
    console.log(play);

    const guestInningUpdatedTotal = { ...guestInningTotal };
    guestInningUpdatedTotal[guestInning] = inningHRCounter + 1;

    const homeInningUpdatedTotal = { ...homeInningTotal };
    homeInningUpdatedTotal[homeInning] = inningHRCounter + 1;

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
    ///////////////////////////// IF BALL
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
            guestScore: guestScore + 1,
            inningHRCounter: inningHRCounter + 1,
            guestInningTotal: guestInningUpdatedTotal
          });
          alert("Guest Team Homerun!");
          this.resetPosession();
        }
      } else if (homeAtBat) {
        if (strike < 3 && ball < 4) {
          this.setState({
            homeScore: homeScore + 1,
            inningHRCounter: inningHRCounter + 1,
            homeInningTotal: homeInningUpdatedTotal
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
      homeAtBat,
      inningHRCounter,
      guestInning,
      guestInningTotal,
      homeInning,
      homeInningTotal
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
        <div
          className="at-bat"
          style={{ color: "green", fontWeight: "bolder" }}
        >
          Inning Homeruns: {inningHRCounter}
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
          guestInningTotal={guestInningTotal}
          homeInningTotal={homeInningTotal}
          guestInning={guestInning}
          homeInning={homeInning}
        />
      </div>
    );
  }
}

export default App;
