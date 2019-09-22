import { shallow } from "enzyme";
import React from "react";
import Possession from "../Possession";

it("expect to render Display Component", () => {
  expect(shallow(<Possession />)).toMatchSnapshot();
});
