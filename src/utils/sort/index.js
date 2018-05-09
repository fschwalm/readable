import * as SortTypes from './types';

const getSortFunctionByFilter = (filter) => {
  switch (filter) {
    case SortTypes.MOST_RECENT:
      return (a, b) => a.timestamp < b.timestamp;
    case SortTypes.LESS_RECENT:
      return (a, b) => a.timestamp > b.timestamp;
    case SortTypes.MOST_RATED:
      return (a, b) => b.voteScore - a.voteScore;
    case SortTypes.LESS_RATED:
      return (a, b) => a.voteScore - b.voteScore;
    default:
      return undefined;
  }
};

export { getSortFunctionByFilter };
