import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {expect, it} from '@jest/globals';
import Welcome from '../app/screens/welcome';

describe('tests for welcome screen', () => {
  it('renders components correctly', () => {
    render(<Welcome navigation />);
  });

  it('handles all button', () => {
    const {getByTestId} = render(<Welcome navigation />);
    // fireEvent.press(getByTestId('SignupButton'));
    // fireEvent.press(getByTestId('LoginButton'));
  });

  //   it('handles all navigation', () => {
  //     const pushMock = jest.fn();
  //     const {getByTestId} = render(<Welcome navigation={{navigate: pushMock}} />);

  //     expect(pushMock).toBeCalledWith('Signup');
  //   });
});
