import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './app/navigation/app';
import {strings} from './app/locales';
import {SafeAreaView} from 'react-native';

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
      {/* <SafeAreaView style={{flex: 1}}> */}
      <AppNavigation />
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};

export default App;
