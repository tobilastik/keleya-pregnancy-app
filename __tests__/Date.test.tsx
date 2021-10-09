import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import DateScreen from '../app/screens/onboarding/DateScreen';

it('renders correctly', async () => {
  const pushMock = jest.fn();

  const {getByText, getAllByText} = render(
    <DateScreen navigation={{navigate: pushMock}} />,
  );
  const button = getByText(/Continue/i);

  fireEvent.press(button);
});
