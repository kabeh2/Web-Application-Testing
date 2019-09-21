import React from "react";
import AppContext from "./AppContext";

class AppProvider extends Component {
  state = {};

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
