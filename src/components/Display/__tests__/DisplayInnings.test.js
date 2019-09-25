import { shallow } from "enzyme";
import React from "react";
import DisplayInnings from "../DisplayInnings";

it("expect to render Display Component", () => {
  expect(shallow(<DisplayInnings />)).toMatchSnapshot();
});
