import React, {useState} from 'react';
import {View, Button, Text, Alert} from 'react-native';
import DatePicker from 'react-native-date-picker';

const DatePickerExample = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  // Define disabled dates (e.g., disable weekends)
  const disabledDates = [
    new Date(2025, 1, 17), // Example: Disable February 17, 2025
    new Date(2025, 1, 18), // Example: Disable February 18, 2025
  ];

  const isDateDisabled = (selectedDate: Date) => {
    return disabledDates.some(
      disabledDate =>
        selectedDate.toDateString() === disabledDate.toDateString(),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.selectedDateText}>
        Selected Date: {date.toDateString()}
      </Text>
      <Button title="Open Date Picker" onPress={() => setOpen(true)} />

      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={selectedDate => {
          if (isDateDisabled(selectedDate)) {
            Alert.alert('This date is disabled. Please select another date.');
          } else {
            setDate(selectedDate);
          }
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
      />
    </View>
  );
};

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDateText: {
    marginBottom: 10,
  },
});

export default DatePickerExample;
