import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './app/navigation/app';
import {strings} from './app/locales';
import {Provider} from 'react-redux';
import {store, persistor} from './app/store';
import {PersistGate} from 'redux-persist/integration/react';

interface AppProps {}

const App = (props: AppProps) => {
  React.useEffect(() => {
    handleLanguage();
  }, []);

  const handleLanguage = () => {
    if (strings.getInterfaceLanguage() == 'de-DE') {
      strings.setLanguage('de');
    } else {
      strings.setLanguage('en');
    }
  };
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
