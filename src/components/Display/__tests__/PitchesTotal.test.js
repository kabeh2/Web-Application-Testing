import { shallow } from "enzyme";
import React from "react";
import PitchesTotal from "../PitchesTotal";

it("expect to render Display Component", () => {
  expect(shallow(<PitchesTotal />)).toMatchSnapshot();
});
