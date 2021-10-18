import React from "react";
import "./ExpensesFilter.css";

class ExpensesFilter extends React.Component {
  constructor(props) {
    super(props);
    this.filterChangeHandler = this.filterChangeHandler.bind(this);
  }

  filterChangeHandler(event) {
    this.props.onChangeFilterYear(event.target.value);
  }

  render() {
    return (
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select
            onChange={this.filterChangeHandler}
            value={this.props.defaultValue}
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    );
  }
}

export default ExpensesFilter;
