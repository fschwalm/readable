import React from 'react';
import { sortOptions } from '../../utils/sort/options';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.props.onChangeSortMode(event.target.value);
  }

  render() {
    return (
      <div className="sort">
        <select value={this.props.currentSortMode} onChange={this.handleChange}>
          {sortOptions.map(option => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Sort;
