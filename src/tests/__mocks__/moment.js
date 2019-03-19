/* we can't just import Moment, this is going to look for th emocked version and it would cause a stack trace error.
Jest allows us to get the original version of Moment. */
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};
