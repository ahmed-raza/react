import React from "react";
import "./ChartBar.css";

class ChartBar extends React.Component {
  render() {
    let barFillHeight = "0%";

    if (this.props.maxValue > 0) {
      barFillHeight =
        Math.round((this.props.value / this.props.maxValue) * 100) + "%";
    }

    return (
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div
            className="chart-bar__fill"
            style={{ height: barFillHeight }}
          ></div>
        </div>
        <div className="chart-bar__label">{this.props.label}</div>
      </div>
    );
  }
}

export default ChartBar;
