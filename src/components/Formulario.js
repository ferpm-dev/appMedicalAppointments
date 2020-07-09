import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import {Colors} from '../../colors';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';

const Formulario = ({appoinments, setAppoinments, notShowForm}) => {
  const [patient, savePatient] = useState('');
  const [phone, savePhone] = useState('');
  const [healtInsurance, saveHealtInsurance] = useState('');
  const [date, saveDate] = useState('');
  const [time, saveTime] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [symptoms, saveSymptoms] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    const options = {year: 'numeric', month: 'long', day: '2-digit'};
    saveDate(date.toLocaleDateString('es-ES', options));
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const handleTimeConfirm = time => {
    const options = {hour: 'numeric', minute: '2-digit'};
    saveTime(time.toLocaleString('en-US', options));
    hideTimePicker();
  };

  const newAppoinment = () => {
    if (
      patient.trim() === '' ||
      phone.trim() === '' ||
      healtInsurance.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
      symptoms.trim() === ''
    ) {
      showAlert();
      return;
    }
    const appoinment = {patient, phone, healtInsurance, date, time, symptoms};

    appoinment.id = shortid.generate();
    console.log(appoinment);
    const newAppoinments = [...appoinments, appoinment];
    setAppoinments(newAppoinments);
    notShowForm(false);
  };

  const showAlert = () => {
    Alert.alert('Error', 'Todos los campos son obligatorios', [
      {
        text: 'OK',
      },
    ]);
  };

  return (
    <>
      <ScrollView style={styles.grandContainer}>
        <View style={styles.container}>
          <Text style={styles.label}>Paciente</Text>
          <TextInput
            style={styles.imput}
            onChangeText={text => savePatient(text)}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Teléfono</Text>
          <TextInput
            style={styles.imput}
            onChangeText={text => savePhone(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Obra Social</Text>
          <TextInput
            style={styles.imput}
            onChangeText={text => saveHealtInsurance(text)}
          />
        </View>
        <View style={styles.containerBtn}>
          <Text style={styles.label}>Horario</Text>

          <TouchableOpacity onPress={showDatePicker} style={styles.btnToSave}>
            <Text style={styles.txtBtn}>Elegir un día</Text>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
              locale="es_ES"
              headerTextIOS="Elige un día"
              cancelTextIOS="Cancelar"
              confirmTextIOS="Confirmar"
            />
          </TouchableOpacity>
          <Text>{date}</Text>
        </View>
        <View style={styles.containerBtn}>
          <Text style={styles.label}>Fecha</Text>

          <TouchableOpacity onPress={showTimePicker} style={styles.btnToSave}>
            <Text style={styles.txtBtn}>Elegir un horario</Text>
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleTimeConfirm}
              onCancel={hideTimePicker}
              locale="es_ES"
              headerTextIOS="Elige un horario"
              cancelTextIOS="Cancelar"
              confirmTextIOS="Confirmar"
            />
          </TouchableOpacity>
          <Text>{time}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Síntomas</Text>
          <TextInput
            style={styles.imput}
            onChangeText={text => saveSymptoms(text)}
          />
        </View>
        <View style={styles.containerBtn}>
          <TouchableOpacity
            onPress={() => newAppoinment()}
            style={styles.btnToSend}>
            <Text style={styles.txtBtn}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  grandContainer: {
    paddingTop: 0,
    paddingBottom: 30,
    backgroundColor: Colors.light,
  },
  container: {
    backgroundColor: Colors.light,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  containerBtn: {
    backgroundColor: Colors.light,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 20,
    alignItems: 'stretch',
  },
  imput: {
    fontSize: 24,
    color: Colors.dark,
    backgroundColor: Colors.lighter,
    borderRadius: 5,
    height: 40,
    borderColor: Colors.grey,
    borderWidth: 1,
  },
  label: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  btnToSave: {
    height: 40,
    backgroundColor: Colors.grey,
    borderRadius: 3,
    justifyContent: 'center',
  },
  btnToSend: {
    marginTop: '10%',
    height: 40,
    backgroundColor: Colors.dark,
    borderRadius: 3,
    justifyContent: 'center',
  },
  txtBtn: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
    color: Colors.white,
  },
});

export default Formulario;
