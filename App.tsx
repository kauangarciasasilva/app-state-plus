
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import * as Font from 'expo-font'
export default function App() {
  const [somar, setSoma] = useState(0);

  const [carregadaFont, setFonteCarregada] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      Geologica_Auto: require('./assets/font/static/Geologica_Auto-Bold.ttf'),
      Geologica_Cursive: require('./assets/font/static/Geologica_Auto-Light.ttf')
    })
  }
  useEffect(() => {
    loadFonts()
      .then(() => { setFonteCarregada(true) })
      .catch((erro) => console.log('erro', erro))
  }, []);

  const Contador = () => {
    setSoma(somar + 1);
  };

  return (
    <View style={styles.container}>
      {carregadaFont ?
        <Text style={{ fontFamily: 'Geologica_Auto', fontSize: 50 }}>Contador</Text>
        :
        <Text > fonte</Text>
      }
      <View>
        <Text style={styles.Text}>{somar}</Text>
      </View>
      <TouchableHighlight
        style={styles.botton}
        onPress={() => { Contador() }}>

        <Text
          style={{ color: '#fff', fontSize: 40 }}
        >
          click
        </Text>
      </TouchableHighlight>

    </View>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'rgb(100,128,139)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botton: {
    justifyContent: 'center',
    backgroundColor: 'rgb(38,38,105)',
    elevation: 5,
    alignItems: 'center',
    height: 150,
    width: 150,
    borderRadius: 30,
    position: 'absolute',
    bottom: 100,


  },
  Text: {
    height: 900,
   
    fontSize: 50
  }
});
