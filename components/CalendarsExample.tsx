import React, {useState} from 'react';
import {
  View,
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

const CalendarsExample = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Generate disabled dates for all past dates
  const generateDisabledDates = () => {
    const today = moment().format('YYYY-MM-DD');
    const disabledDates: {
      [key: string]: {disabled: boolean; disableTouchEvent: boolean};
    } = {
      '2025-02-17': {disabled: true, disableTouchEvent: true},
      '2025-02-18': {disabled: true, disableTouchEvent: true},
    };

    for (let m = moment('2000-01-01'); m.isBefore(today); m.add(1, 'days')) {
      disabledDates[m.format('YYYY-MM-DD')] = {
        disabled: true,
        disableTouchEvent: true,
      };
    }

    return disabledDates;
  };

  const disabledDates = generateDisabledDates();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selected Date: {selectedDate || 'None'}</Text>
      <Button title="Open Calendars" onPress={() => setModalVisible(true)} />

      {/* Modal for the Calendar */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Calendar
              onDayPress={(day: {dateString: string}) => {
                if (!disabledDates[day.dateString]) {
                  setSelectedDate(day.dateString);
                  setModalVisible(false);
                }
              }}
              markedDates={{
                ...disabledDates,
                [selectedDate]: {selected: true, selectedColor: 'blue'},
              }}
              theme={{
                selectedDayBackgroundColor: 'blue',
                todayTextColor: 'red',
                arrowColor: 'black',
              }}
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
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
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  closeText: {
    color: 'red',
    fontSize: 18,
  },
});

export default CalendarsExample;
