import { shallow } from "enzyme";
import React from "react";
import DisplayTotal from "../DisplayTotal";

it("expect to render Display Component", () => {
  expect(shallow(<DisplayTotal />)).toMatchSnapshot();
});
