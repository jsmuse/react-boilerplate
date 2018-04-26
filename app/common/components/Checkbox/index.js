import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'withStyles';
import { compose } from 'recompose';

import styles from './styles.scss';

const Checkbox = ({ label, id, ...rest }) => (
  <Fragment>
    <input className={styles.checkbox} type="checkbox" id={id} {...rest} />
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
  </Fragment>
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
};

export default compose(withStyles(styles))(Checkbox);
