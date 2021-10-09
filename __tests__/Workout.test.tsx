import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import Workout from '../app/screens/onboarding/WorkoutScreen';

it('renders correctly', async () => {
  const pushMock = jest.fn();

  const {getByText, getAllByText} = render(
    <Workout navigation={{navigate: pushMock}} />,
  );

  const button = getByText(/Continue/i);

  fireEvent.press(button);
});
