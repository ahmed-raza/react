import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

class Chart extends React.Component {
  render() {
    const dataPointValues = this.props.dataPoints.map(
      (dataPoint) => dataPoint.value
    );
    const totalMaximum = Math.max(...dataPointValues);
    return (
      <div className="chart">
        {this.props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>
    );
  }
}

export default Chart;
