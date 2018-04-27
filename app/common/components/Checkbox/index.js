import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'withStyles';
import { compose } from 'recompose';

import styles from './styles.scss';

const Checkbox = ({ label, ...rest }) => (
  <React.Fragment>
    <label className={styles.label}>
      <input className={styles.checkbox} type="checkbox" {...rest} />
      {label}
    </label>
  </React.Fragment>
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default compose(withStyles(styles))(Checkbox);
