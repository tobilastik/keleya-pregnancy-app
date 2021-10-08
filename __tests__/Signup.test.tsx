import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';
import Signup from '../app/screens/signup';

it('renders correctly', async () => {
  const pushMock = jest.fn();
  const email = 'raji@gmail.com';
  const password = '1234';
  const {getByText, getByPlaceholderText} = render(
    <Signup navigation={{navigate: pushMock}} />,
  );
  const button = getByText(/Create account/i);

  fireEvent.changeText(getByPlaceholderText(/example@gmail.com/i), email);
  fireEvent.changeText(getByPlaceholderText(/Enter a password/i), password);
  fireEvent.press(button);
});
