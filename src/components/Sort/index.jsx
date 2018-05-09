import React from 'react';
import { connect } from 'react-redux';
import { sortPostByFilter } from '../../store/actions';
import * as SortTypes from '../../utils/sort/types';
import { sortOptions } from '../../utils/sort/options';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: SortTypes.MOST_RECENT,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ filter: event.target.value });
    // TODO: async set state?
    // Line 21 was executing before line 18 set the value on state.
    this.props.onSortPosts(event.target.value);
  }

  render() {
    return (
      <div className="sort">
        <select value={this.state.filter} onChange={this.handleChange}>
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

const mapDispatchToProps = dispatch => ({
  onSortPosts: filter => dispatch(sortPostByFilter(filter)),
});

export default connect(null, mapDispatchToProps)(Sort);
