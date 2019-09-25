import { shallow, mount, render } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { InitialState } from "./InitialState";

/**
 * Factory function to create a ShallowWrapper for the App Component.
 * @function setup
 * @param {object} props - Component specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe("Renders App Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("expect to render App Component", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toEqual(1);
  });

  it("expect to render Same App Component Snapshot", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});

describe("Global renders no matter if game is over or not", () => {
  it("Render New Game Button", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-restart-btn");
    expect(appComponent.length).toBe(1);
  });

  it("Render Display Component", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-display");
    expect(appComponent.length).toBe(1);
  });

  it("Initial App state is equal to Initial State config", () => {
    const wrapper = setup();
    const initialState = wrapper.state();
    expect(initialState).toBe(InitialState);
  });
});

describe("While Game is not over", () => {
  it("Play Ball Button Renders", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-play-ball-btn");
    expect(appComponent.length).toBe(1);
  });

  describe("When 4 balls, or 3 strikes, render Click for Next Possession Button", () => {
    it("When 4 balls reached...", () => {
      const ballState = {
        ball: 4
      };
      const wrapper = setup(null, ballState);
      const button = findByTestAttr(wrapper, "component-next-btn");
      expect(button.length).toEqual(1);
    });

    it("When 3 strikes reached...", () => {
      const strikeState = {
        strike: 3
      };
      const wrapper = setup(null, strikeState);
      const button = findByTestAttr(wrapper, "component-next-btn");
      expect(button.length).toEqual(1);
    });
  });

  it("When 3 outs, render Click for Next Team Button", () => {
    const outsState = {
      outs: 3
    };
    const wrapper = setup(null, outsState);
    const button = findByTestAttr(wrapper, "component-next-btn");
    expect(button.length).toEqual(1);
  });

  describe("When Home Team is at bat", () => {
    it("It renders text saying Home Team is at bat", () => {
      const atBat = {
        guestAtBat: false,
        homeAtBat: true
      };
      const wrapper = setup(null, atBat);
      const atBatText = findByTestAttr(wrapper, "component-at-bat");
      expect(atBatText.length).toBe(1);
      expect(atBatText.text()).toContain("Home");
    });
  });

  describe("When Guest Team is at bat", () => {
    it("It renders text saying Guest Team is at bat", () => {
      const atBat = {
        guestAtBat: true,
        homeAtBat: false
      };
      const wrapper = setup(null, atBat);
      const atBatText = findByTestAttr(wrapper, "component-at-bat");
      expect(atBatText.text()).toContain("Guest");
    });
  });
});

describe("While Game is over", () => {
  beforeEach(() => {});
  it("Game over button is rendered and disabled", () => {
    const endState = {
      homeInning: 10
    };
    const wrapper = setup(null, endState);
    const endBtn = findByTestAttr(wrapper, "component-game-over-btn");
    expect(endBtn.text()).toContain("GAME OVER!");
  });

  it("Game over text under button appears", () => {
    const endState = {
      homeInning: 10
    };
    const wrapper = setup(null, endState);
    const endText = findByTestAttr(wrapper, "component-winner");
    expect(endText.text()).toContain("GAME OVER!");
  });

  describe("If Guest Team wins", () => {
    it("Render Winner Guest Team", () => {
      const endState = {
        homeInning: 10,
        guestScore: 1,
        homeScore: 0
      };
      const wrapper = setup(null, endState);
      const guestWinner = findByTestAttr(wrapper, "component-winner");
      expect(guestWinner.text()).toContain("GUEST");
    });
  });

  describe("If Home Team wins", () => {
    it("Render Winner Home Team", () => {
      const endState = {
        homeInning: 10,
        guestScore: 0,
        homeScore: 1
      };
      const wrapper = setup(null, endState);
      const homeWinner = findByTestAttr(wrapper, "component-winner");
      expect(homeWinner.text()).toContain("HOME");
    });
  });

  describe("If Tie Game", () => {
    it("Render Tie Game Text", () => {
      const endState = {
        homeInning: 10,
        guestScore: 1,
        homeScore: 1
      };
      const wrapper = setup(null, endState);
      const tieGame = findByTestAttr(wrapper, "component-winner");
      expect(tieGame.text()).toContain("TIE");
    });
  });
});
