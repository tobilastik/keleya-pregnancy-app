import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import NameScreen from '../app/screens/onboarding/NameScreen';

it('renders correctly', async () => {
  const navigation = {navigate: jest.fn()};

  const {getByText} = render(<NameScreen navigation={navigation} />);
  const button = getByText(/Continue/i);

  fireEvent.press(button);
});
