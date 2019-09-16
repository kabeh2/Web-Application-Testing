import React from "react";
import "./Display.scss";
import DisplayInnings from "./DisplayInnings";
import DisplayTotal from "./DisplayTotal";
import PitchesTotal from "./PitchesTotal";
import Possession from "./Possession";

const Display = props => {
  return (
    <div className="display__container">
      <DisplayInnings />
      <DisplayTotal />
      <div className="pitches-home--container right">
        <PitchesTotal name="Home" borderSide="right" />
      </div>
      <div className="possession-wrapper">
        <div className="possession--ball">
          <Possession name="Ball" />
        </div>
        <div className="possession--strike">
          <Possession name="Strike" />
        </div>
        <div className="possession--out">
          <Possession name="Out" />
        </div>
      </div>
      <div className="pitches-away--container left">
        <PitchesTotal name="Away" borderSide="left" />
      </div>
    </div>
  );
};

export default Display;
