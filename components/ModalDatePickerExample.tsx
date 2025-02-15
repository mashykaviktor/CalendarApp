import React, {useState} from 'react';
import {View, Button, Text, StyleSheet, Alert, Platform} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ModalDatePickerExample = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [visible, setVisible] = useState(false);

  // Disabled dates
  const disabledDates = ['2025-02-17', '2025-02-18'];

  const handleConfirm = (selectedDate: Date) => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    if (disabledDates.includes(formattedDate)) {
      Alert.alert('This date is disabled. Please select another date.');
    } else {
      setDate(selectedDate);
    }
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Selected Date: {date?.toDateString() || 'None'}
      </Text>
      <Button title="Open Date Picker" onPress={() => setVisible(true)} />

      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        display={Platform.OS === 'ios' ? 'inline' : 'calendar'}
        onConfirm={handleConfirm}
        onCancel={() => setVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 18, marginBottom: 10},
});

export default ModalDatePickerExample;
