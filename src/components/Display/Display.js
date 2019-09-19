import React from "react";
import "./Display.scss";
import DisplayInnings from "./DisplayInnings";
import DisplayTotal from "./DisplayTotal";
import PitchesTotal from "./PitchesTotal";
import Possession from "./Possession";

const Display = ({
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
}) => {
  return (
    <div className="display__container">
      <DisplayInnings
        guestInningTotal={guestInningTotal}
        homeInningTotal={homeInningTotal}
        guestInning={guestInning}
        homeInning={homeInning}
      />
      <DisplayTotal guestScore={guestScore} homeScore={homeScore} />
      <div className="pitches-home--container right">
        <PitchesTotal name="Home" borderSide="right" />
      </div>
      <div className="possession-wrapper">
        <div className="possession--ball">
          <Possession name="Ball" count={ball} />
        </div>
        <div className="possession--strike">
          <Possession name="Strike" count={strike} />
        </div>
        <div className="possession--out">
          <Possession name="Out" count={outs} />
        </div>
      </div>
      <div className="pitches-away--container left">
        <PitchesTotal name="Away" borderSide="left" />
      </div>
    </div>
  );
};

export default Display;
