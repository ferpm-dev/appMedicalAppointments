import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import {Colors} from './colors';
import ItemList from './src/components/ItemList';
import Formulario from './src/components/Formulario';

const App = () => {
  const [showForm, notShowForm] = useState(false);
  const [appoinments, setAppoinments] = useState([
    {id: '1', paciente: 'Fer', sintomas: 'tiene gota'},
    {id: '3', paciente: 'Blacky', sintomas: 'tiene pulgas'},
    {id: '2', paciente: 'Patri', sintomas: 'no tira nada de nada'},
    {id: '4', paciente: 'Ma', sintomas: 'baila tango'},
    {id: '5', paciente: 'Gon', sintomas: 'es kernerista'},
    {id: '6', paciente: 'Valen', sintomas: 'va volando'},
    {id: '7', paciente: 'Ori', sintomas: 'cocina rico'},
  ]);

  const guardarPaciente = id => {
    setAppoinments(citasActuales => {
      return citasActuales.filter(appoinment => appoinment.id !== id);
    });
  };

  const toShowForm = () => {
    notShowForm(!showForm);
  };

  return (
    <View style={styles.grandContainer}>
      <Text style={styles.title}>Proyecto consultorio</Text>
      <TouchableOpacity
        onPress={() => toShowForm()}
        style={styles.btnNewAppoinment}>
        <Text style={styles.txtBtn}>
          {showForm ? 'Volver al listado' : 'Crear nueva cita'}
        </Text>
      </TouchableOpacity>
      <View style={styles.content}>
        {showForm ? (
          <>
            <Text style={styles.subTitle}>Completa con tus datos</Text>
            <Formulario
              appoinments={appoinments}
              setAppoinments={setAppoinments}
              notShowForm={notShowForm}
            />
          </>
        ) : (
          <>
            <Text style={styles.subTitle}>
              {appoinments.length > 0
                ? 'Administra tus citas'
                : 'No hay ninguna cita, agrega una'}
            </Text>
            <FlatList
              data={appoinments}
              renderItem={({item}) => (
                <ItemList item={item} guardarPaciente={guardarPaciente} />
              )}
              keyExtractor={appoinment => appoinment.id}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grandContainer: {
    backgroundColor: Colors.orange,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  title: {
    marginTop: Platform.OS === 'ios' ? 65 : 25,
    marginBottom: 10,
    fontSize: 21,
    fontWeight: 'bold',
    color: Colors.white,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  subTitle: {
    marginTop: 0,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    color: Colors.white,
    paddingHorizontal: 20,
  },
  btnToSave: {
    height: 40,
    backgroundColor: Colors.grey,
    borderRadius: 3,
    justifyContent: 'center',
  },
  btnNewAppoinment: {
    height: 40,
    backgroundColor: Colors.black,
    borderRadius: 3,
    justifyContent: 'center',
    margin: 20,
    elevation: 5,
  },
  txtBtn: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
    color: Colors.white,
  },
});

export default App;
