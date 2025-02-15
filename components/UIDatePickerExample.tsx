import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs'; // Prevents past date selection

const UIDatePickerExample = () => {
  const [date, setDate] = useState(dayjs());
  const [modalVisible, setModalVisible] = useState(false);

  // Dates to disable
  const disabledDates = ['2025-02-17', '2025-02-18'];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Selected Date: {date.format('YYYY-MM-DD')}
      </Text>
      <Button
        title="Open UI Date Picker"
        onPress={() => setModalVisible(true)}
      />

      {/* Modal for Bottom-Up Appearance */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <DatePicker
              date={date}
              mode="single"
              minDate={dayjs()} // Prevents past date selection
              disabledDates={disabledDates}
              onChange={params => {
                if (params?.date) {
                  const selectedDate = dayjs(params.date); // Ensure it's a Day.js object
                  setDate(selectedDate);
                } else {
                  console.warn('Invalid date selected');
                }
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

export default UIDatePickerExample;
