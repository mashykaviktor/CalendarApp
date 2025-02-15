import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

const CalendarPickerExample = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Disabled dates
  const disabledDates = ['2025-02-17', '2025-02-18'];

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = moment(date).format('YYYY-MM-DD'); // Convert to Moment.js object
      if (disabledDates.includes(formattedDate)) {
        Alert.alert('This date is disabled. Please select another date.');
      } else {
        setSelectedDate(formattedDate);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selected Date: {selectedDate || 'None'}</Text>
      <Button
        title="Open Calendar Picker"
        onPress={() => setModalVisible(true)}
      />

      {/* Modal for Bottom-Up Appearance */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <CalendarPicker
              onDateChange={handleDateChange}
              minDate={moment().toDate()} // Prevents past date selection
              disabledDates={date =>
                disabledDates.includes(moment(date).format('YYYY-MM-DD'))
              }
              selectedDayColor="blue"
              selectedDayTextColor="white"
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  closeButton: {marginTop: 10, alignItems: 'center'},
  closeText: {color: 'red', fontSize: 18},
});

export default CalendarPickerExample;
