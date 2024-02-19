import { ImageBackground ,View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import background from '../assets/4.png'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Bem-vindo ao</Text>
      <Text style={styles.subtitle}>Flores <Text style={styles.subtitlept2}>& Jardim</Text>
      </Text>
      <TouchableOpacity
          style={styles.buttonregister}
          onPress={() => navigation.navigate('Singup')}>
          <Text style={styles.buttonText}>Registre-se agora</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginbutton}>Já possuo uma conta</Text>
      </TouchableOpacity>
      </ImageBackground> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  title: {
    fontSize:20,
    color: '#E2CF81',
    fontWeight: 'bold',
    position: 'absolute',
    left: 10,
    top: "43%"
  },
  subtitle:{
    fontSize: 50,
    color: '#B03A20',
    fontWeight: 'bold',
    position: 'absolute',
  },
  subtitlept2: {
    color: '#E2CF81',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  buttonregister: {
    backgroundColor: '#B03A20', // Add your desired button color
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
    position: 'relative',
    top: 230,
    paddingLeft: 60,
    paddingRight: 60
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loginbutton: {
    top: 260,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14
  }
})