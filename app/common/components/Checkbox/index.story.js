import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from './index';

storiesOf('components/Checkbox', module)
  .add('General', () => (
    <Checkbox label="Label" id="checkbox-example" onChange={action('change')} />
  ))
  .add('Checked', () => (
    <Checkbox checked label="Label" id="checkbox-example" onChange={action('change')} />
  ));
