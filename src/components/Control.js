import React from "react";
import Data from "./Data"

class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      dataVisualization: [],

    };
  }

  render() {


    return (
      <React.Fragment>
        <Data />
      </React.Fragment>
    );
  }
}

export default Control;
