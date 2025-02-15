import React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {DatePickerModal} from 'react-native-paper-dates';
import {Provider as PaperProvider} from 'react-native-paper';

const PaperDatePickerExample = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);

  // Disabled dates
  const disabledDates = ['2025-02-17', '2025-02-18'];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.text}>
          Selected Date: {date?.toDateString() || 'None'}
        </Text>
        <Button title="Open Date Picker" onPress={() => setOpen(true)} />

        <DatePickerModal
          locale="en"
          mode="single"
          visible={open}
          date={date}
          onDismiss={() => setOpen(false)}
          onConfirm={selectedDate => {
            if (selectedDate.date) {
              const formattedDate = selectedDate.date
                .toISOString()
                .split('T')[0];
              if (disabledDates.includes(formattedDate)) {
              } else {
                setDate(selectedDate.date);
              }
            }
            setOpen(false);
          }}
          validRange={{startDate: new Date()}} // Prevents selecting past dates
        />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 18, marginBottom: 10},
});

export default PaperDatePickerExample;
