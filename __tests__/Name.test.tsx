import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import NameScreen from '../app/screens/onboarding/NameScreen';

it('renders correctly', async () => {
  const pushMock = jest.fn();

  const {getByText, getAllByText} = render(
    <NameScreen navigation={{navigate: pushMock}} />,
  );
  const button = getByText(/Continue/i);

  fireEvent.press(button);
});
