import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'withStyles';
import { compose } from 'recompose';

import styles from './styles.scss';

const TextInput = ({ label, id, ...rest }) => (
  <div className={styles.container}>
    <input className={styles.checkbox} type="checkbox" id={id} {...rest} />
    <label htmlFor={id}>{label}</label>
  </div>
);

TextInput.propTypes = {
  error: PropTypes.bool,
};

export default compose(withStyles(styles))(TextInput);
