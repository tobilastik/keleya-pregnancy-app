import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import DateScreen from '../app/screens/onboarding/DateScreen';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([]);

describe('namescreen component', () => {
  it('renders component correctly', async () => {
    const navigation = {navigate: jest.fn()};

    const route = {params: {isAccesibilityModeOn: false}};
    const {getByText, getAllByText} = render(
      <DateScreen route={route} navigation={navigation} />,
    );
    const button = getByText(/Continue/i);

    fireEvent.press(button);
  });
});
