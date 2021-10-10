import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {expect, it} from '@jest/globals';
import Welcome from '../app/screens/welcome';

describe('tests for welcome screen', () => {
  it('renders components correctly', () => {
    render(<Welcome navigation />);
  });
});
