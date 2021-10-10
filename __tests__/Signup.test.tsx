import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Signup from '../app/screens/signup';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import * as redux from 'react-redux';

describe('signup page test', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  const useDispatchMock = jest.spyOn(redux, 'useDispatch');
  const initialState = {email: 'raji@gmail.com', password: '12345'};

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('access useselector hooks correctly', () => {
    useSelectorMock.mockReturnValue(initialState);
  });

  it('renders component correctly', async () => {
    const navigation = {navigate: jest.fn()};
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const {getByText, getByPlaceholderText} = render(
      <Provider store={store}>
        <Signup navigation={navigation} />,
      </Provider>,
    );
    const button = getByText(/Create account/i);

    fireEvent.changeText(
      getByPlaceholderText(/example@gmail.com/i),
      initialState.email,
    );
    fireEvent.changeText(
      getByPlaceholderText(/Enter a password/i),
      initialState.password,
    );
    fireEvent.press(button);
  });
});
