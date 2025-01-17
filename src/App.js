import React, { Component } from "react";
import Display from "./components/Display/Display";
import { InitialState } from "./InitialState";
import "./App.scss";
import AppContext from "./context/AppContext";

class App extends Component {
  state = InitialState;

  handleGameRestart = () => {
    this.setState(InitialState);
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
      inningHRCounter,
      pitchesGuest,
      pitchesHome
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
        if (guestAtBat) {
          this.setState({
            pitchesGuest: pitchesGuest + 1
          });
        } else {
          this.setState({
            pitchesHome: pitchesHome + 1
          });
        }
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
      if (ball < 4 && outs < 3 && strike < 2) {
        this.setState({
          ball: ball + 1,
          strike: strike + 1
        });
        alert("Ball!");
        if (guestAtBat) {
          this.setState({
            pitchesGuest: pitchesGuest + 1
          });
        } else {
          this.setState({
            pitchesHome: pitchesHome + 1
          });
        }
      } else if (ball < 4 && outs < 3 && strike < 3) {
        this.setState({
          ball: ball + 1
        });
        alert("Ball!");
        if (guestAtBat) {
          this.setState({
            pitchesGuest: pitchesGuest + 1
          });
        } else {
          this.setState({
            pitchesHome: pitchesHome + 1
          });
        }
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
            guestInningTotal: guestInningUpdatedTotal,
            pitchesGuest: pitchesGuest + 1
          });
          alert("Guest Team Homerun!");
          this.resetPosession();
        }
      } else if (homeAtBat) {
        if (strike < 3 && ball < 4) {
          this.setState({
            homeScore: homeScore + 1,
            inningHRCounter: inningHRCounter + 1,
            homeInningTotal: homeInningUpdatedTotal,
            pitchesHome: pitchesHome + 1
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
      guestScore,
      homeScore,
      guestAtBat,
      homeInning,
      pitchesGuest,
      pitchesHome
    } = this.state;

    return (
      <AppContext.Provider
        value={{
          state: this.state
        }}
      >
        <div className="App" data-test="component-app">
          <div className="btn_controls--container">
            {/* GAME IS DONE WHEN MORE THAN 9 INNINGS  */}
            {homeInning < 10 ? (
              ball === 4 || strike === 3 || outs === 3 ? (
                <button
                  onClick={this.nextPossession}
                  className="play-btn"
                  data-test="component-next-btn"
                >
                  {outs === 3
                    ? "Click for Next TEAM!"
                    : "Click for Next Possession!"}
                </button>
              ) : (
                <button
                  onClick={this.handleClick}
                  className="play-btn"
                  data-test="component-play-ball-btn"
                >
                  Play Ball!
                </button>
              )
            ) : (
              <button disabled data-test="component-game-over-btn">
                GAME OVER!
              </button>
            )}

            <button
              onClick={this.handleGameRestart}
              id="restart-btn"
              data-test="component-restart-btn"
            >
              New Game!
            </button>
          </div>

          {/* IF GAME IS DONE, GAME OVER MESSAGE, IF NOT, SHOW WHAT TEAM
        IS AT BAT */}
          {homeInning > 9 ? (
            <div className="at-bat" data-test="component-winner">
              GAME OVER!
              {guestScore > homeScore
                ? " WINNER GUEST TEAM!"
                : guestScore === homeScore
                ? " TIE BALL GAME"
                : " WINNER HOME TEAM!"}
            </div>
          ) : (
            <div className="at-bat" data-test="component-at-bat">
              At Bat: {guestAtBat ? "Guest" : "Home"}
            </div>
          )}

          <Display
            data-test="component-display"
            ball={ball}
            strike={strike}
            outs={outs}
            pitchesGuest={pitchesGuest}
            pitchesHome={pitchesHome}
          />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
