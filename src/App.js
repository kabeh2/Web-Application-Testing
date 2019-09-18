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
      alert("Next Team at Bat!");
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
        {ball === 4 || strike === 3 ? (
          <button onClick={this.nextPossession}>
            Click for Next Possession!
          </button>
        ) : outs === 3 ? (
          <button onClick={this.nextPossession}>Click for Next TEAM!</button>
        ) : (
          <button onClick={this.handleClick}>Play Ball!</button>
        )}
        <div className="at-bat" style={{ color: "green" }}>
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

// if (this.state.outs < 3) {
//   if (this.state.strike > 2 || this.state.ball > 3) {
//     this.resetPosession();
//     this.setState({
//       outs: this.state.outs + 1
//     });
//   } else if (this.state.strike < 3 || this.state.ball < 4) {
//     if (play < 33) {
//       this.setState({
//         strike: this.state.strike + 1
//       });
//       alert("Strike!");
//     } else if (play > 33 && play < 66) {
//       this.setState({
//         ball: this.state.ball + 1
//       });
//       alert("Ball!");
//     } else {
//       this.setState({
//         guestScore: this.state.guestScore + 1,
//         homeScore: this.state.homeScore + 1
//       });
//       alert("Homerun!");
//       this.resetPosession();
//     }
//   }
// } else {
//   this.setState({
//     outs: 0,
//     guestAtBat: !this.state.guestAtBat,
//     homeAtBat: !this.state.homeAtBat
//   });
// }

// if (this.state.strike > 2 || this.state.ball > 3) {
//   this.resetPosession();
//   this.setState({
//     outs: this.state.outs + 1
//   });
// }
