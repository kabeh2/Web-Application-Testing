import { shallow } from "enzyme";
import React from "react";
import Display from "../Display";

it("expect to render Display Component", () => {
  expect(shallow(<Display />).length).toEqual(1);
});
