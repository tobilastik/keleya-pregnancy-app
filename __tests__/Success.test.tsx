import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import Success from '../app/screens/success';

it('renders correctly', async () => {
  const pushMock = jest.fn();

  const {getByText, getAllByText} = render(
    <Success navigation={{navigate: pushMock}} />,
  );
  const button = getByText(/Allow notifications/i);
  const skip = getByText(/Skip/i);

  fireEvent.press(button);
  fireEvent.press(skip);
});
