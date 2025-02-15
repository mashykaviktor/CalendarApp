import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  Platform,
  Modal,
  StyleSheet,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CommunityDateTimePickerExample = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  // Disabled dates
  const disabledDates = ['2025-02-17', '2025-02-18'];

  const isDateDisabled = (selectedDate: Date) => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    return disabledDates.includes(formattedDate);
  };

  const onChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      if (isDateDisabled(selectedDate)) {
        Alert.alert('This date is disabled. Please select another date.');
      } else {
        setDate(selectedDate);
      }
    }
    setShow(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selected Date: {date.toDateString()}</Text>
      <Button title="Open Date Picker" onPress={() => setShow(true)} />

      {Platform.OS === 'ios' ? (
        // iOS uses Modal for the date picker
        <Modal visible={show} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <DateTimePicker
                value={date}
                mode="date"
                display="inline"
                onChange={onChange}
              />
              <Button title="Close" onPress={() => setShow(false)} />
            </View>
          </View>
        </Modal>
      ) : (
        // Android uses built-in modal picker
        show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="calendar"
            onChange={onChange}
          />
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 18, marginBottom: 10},
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default CommunityDateTimePickerExample;
