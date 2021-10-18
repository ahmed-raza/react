import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

class Chart extends React.Component {
  render() {
    return (
      <div className="chart">
        {this.props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={null}
            label={dataPoint.label}
          />
        ))}
      </div>
    );
  }
}

export default Chart;
