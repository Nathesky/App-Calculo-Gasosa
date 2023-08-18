import { Text, SafeAreaView, StyleSheet,View,TextInput,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';




export default function App() {
  
  const [km,setKm] = useState('');
  const [combu,setCombu] = useState('');

function CalculoCombustivel(){
 const resultado = km/combu;
 alert('O consumo do seu veículo é de: R$' + resultado);
}

  return (
    <SafeAreaView style={styles.tudao}>
      <Text style={styles.titulo}>
       CONSUMO DE COMBUSTÍVEL.
      </Text>

<View style={styles.viewinputs}>

      <TextInput style={styles.inputs}
      placeholder="Digite quantos Km's rodados"
      keyboardType="numeric"
      onChangeText={(km)=>setKm(km)}
      />

      <TextInput style={styles.inputs}
      placeholder="Digite quantos L de combustível"
      onChangeText={(combu)=>setCombu(combu)}
      keyboardType="numeric-"
      />
</View>
      <View style={styles.viewbtn}>
      <TouchableOpacity style={styles.btn} onPress={CalculoCombustivel}>
      <Text style={styles.btntexto}> Calcular o consumo gasto </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tudao: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 8,
  },
  titulo: {
    margin: 24,
    color: 'black',
    fontSize: 20,
    borderBottomWidth: 6,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomColor: '#f5c82a'
  },
  inputs: {
    color: '',
    borderWidth: 1,
    padding: 4,
    margin: 10,
    borderRadius: 30
  },
  viewinputs: {
    padding: 8,
    borderWidth: 4,
    borderColor: '#FF4242',
    margin: 10,
    borderRadius: 15
  },
  btn:{
    backgroundColor: '#FF4242',
    width: 220,
    height: 80,
    borderRadius: 50
  },
  btntexto: {
    flex: 1,
    justifyContent: 'center',
    color: 'whitesmoke',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    textAlignVertical: 'center'
  },
  viewbtn: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 6
  }
});
