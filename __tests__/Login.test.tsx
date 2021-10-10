import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import * as redux from 'react-redux';
import Login from '../app/screens/login';
import configureStore from 'redux-mock-store';

describe('login page test', () => {
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

  it('renders login pagec orrectly', async () => {
    const pushMock = jest.fn();
    const mockStore = configureStore();
    const store = mockStore(initialState);

    const {getByText, getByPlaceholderText} = render(
      <Provider store={store}>
        <Login navigation={{navigate: pushMock}} />,
      </Provider>,
    );
    const button = getByText(/Log in/i);

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
