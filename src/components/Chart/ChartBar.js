import React from "react";
import "./ChartBar.css";

class ChartBar extends React.Component {
  render() {
    return (
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div className="chart-bar__fill"></div>
        </div>
        <div className="chart-bar__label">{this.props.label}</div>
      </div>
    );
  }
}
