import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cacau Show!!!</Text>
      <ImageBackground
        source={require('./assets/fundocacaushow.jpg')}
        style={styles.background}
      />

      

      <ScrollView contentContainerStyle={styles.scrollViewContent}>

          <View style={styles.cont}>
            <Image
              style={styles.img}
              source={require('./assets/Produto1.png')}
            />
          </View>
          <View style={styles.cont2}>
            <Image
              style={styles.img2}
              source={require('./assets/Produto2.png')}
            />
          </View>
          <View style={styles.cont3}>
            <Image
              style={styles.img3}
              source={require('./assets/Produto3.png')}
            />
          </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    zIndex: 100110101
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    top: 25,
    width: '100%',
    paddingTop: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  scrollViewContent: {
    paddingTop: 80,
    alignItems: 'center',
  },
  cont: {
    height: 300,
    width: 300,
    borderRadius: 25,
    backgroundColor: 'white',
    margin: 25,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cont2: {
    height: 300,
    width: 300,
    borderRadius: 25,
    backgroundColor: 'white',
    margin: 25,
  },
  img2: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cont3: {
    height: 300,
    width: 300,
    borderRadius: 25,
    backgroundColor: 'white',
    margin: 25,
  },
  img3: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  }
});
