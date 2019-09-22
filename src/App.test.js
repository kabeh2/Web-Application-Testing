import { shallow, mount, render } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("expect to render App Component", () => {
  expect(shallow(<App />).length).toEqual(1);
});
it("expect to render Same App Component Snapshot", () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
