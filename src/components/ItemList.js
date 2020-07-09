import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../colors';

const ItemList = ({item, guardarPaciente}) => {
  const dialogoGuardar = id => {
    // console.log('guardando...', id);
    guardarPaciente(id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerItemLeft}>
        <Text style={styles.txtPaciente}>{item.paciente}</Text>
      </View>
      <View style={styles.containerItemRight}>
        <View>
          <Text style={styles.txtSintoma}>{item.sintomas}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => dialogoGuardar(item.id)}
            style={styles.btnGuardar}>
            <Text style={styles.txtBtn}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.light,
    padding: 10,
    backgroundColor: Colors.lighter,
  },
  containerItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingVertical: 10,
    flex: 0.3,
    height: 40,
  },
  containerItemRight: {
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    flex: 1,
    height: 60,
    paddingRight: 10,
  },
  txtPaciente: {
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: Colors.grey,
  },
  txtSintoma: {
    fontSize: 15,
    fontWeight: 'normal',
    color: Colors.grey,
  },
  txtBtn: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
    color: Colors.white,
  },
  btnGuardar: {
    paddingHorizontal: 0,
    paddingVertical: 12,
    width: 100,
    backgroundColor: Colors.dark,
    borderRadius: 3,
    justifyContent: 'center',
  },
});

export default ItemList;
