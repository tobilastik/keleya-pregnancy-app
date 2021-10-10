import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {it} from '@jest/globals';
import Welcome from '../app/screens/welcome';

describe('tests for welcome screen', () => {
  it('renders components correctly', () => {
    render(<Welcome navigation />);
  });
});
