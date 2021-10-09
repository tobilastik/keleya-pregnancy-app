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
  const initialState = {email: 'raji@gmail.com', password: '1234'};

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('access useselector hooks correctly', () => {
    useSelectorMock.mockReturnValue(initialState);
  });

  it('renders component correctly', async () => {
    const pushMock = jest.fn();
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const {getByText, getByPlaceholderText} = render(
      <Provider store={store}>
        <Signup navigation={{navigate: pushMock}} />,
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
