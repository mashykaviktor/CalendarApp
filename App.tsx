import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CalendarsExample from './components/CalendarsExample';
import UIDatePickerExample from './components/UIDatePickerExample';
import CalendarPickerExample from './components/CalendarPickerExample';
// import DatePickerExample from './components/DataPickerExample';
// import ModalDatePickerExample from './components/ModalDatePickerExample';
// import PaperDatePickerExample from './components/PaperDatePickerExample';
// import CommunityDateTimePickerExample from './components/CommunityDateTimePickerExample';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <ModalDatePickerExample /> */}
        {/* <DatePickerExample /> */}
        {/* <PaperDatePickerExample /> */}
        {/* <CommunityDateTimePickerExample /> */}
        <CalendarsExample />
        <UIDatePickerExample />
        <CalendarPickerExample />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
