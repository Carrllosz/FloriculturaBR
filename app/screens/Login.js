import { ImageBackground,View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Background from '../assets/10.png'

export default function Login({ navigation }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    if (name === '' || email === '' || password === ''){
      alert("Todos os campos devem ser preenchidos");
      return;
    }
    await axios.post("http://localhost:8001/api/login", { name, email, password});
    alert("Log in realizado com sucesso.");
  }

  return (
      <View style={styles.container}>
        <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
          <Text style={styles.Title}>LOG IN</Text>
          <TextInput
          style={styles.EmailInput}
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
          autoCompleteType='email' keyboardType='email-address'
          placeholder='Digite seu e-mail'
          />
          <TextInput
            style={styles.PasswordInput}
            value={password}
            placeholder='Digite sua senha'
            secureTextEntry={true}
            autoCompleteType="password"
            onChageNumber={(text) => onChagePassword(text)}
          />
          <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <Text style={styles.textsingup}> Ainda não possui uma conta?
            <Text style={styles.singup}
                  onPress={() => navigation.navigate("Main")}
            > Sign Up</Text>
          </Text>
        </ImageBackground>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  Title: {
    fontSize:45,
    color: '#fff',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '10%'
  },
  EmailInput: {
    color: "#557B45",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    backgroundColor: "fff",
    borderRadius: 20,
    borderColor: "#fff",
    backgroundColor:'#fff',
    paddingLeft: 60,
    paddingRight: 60,
    textAlign: 'center', 
  },
  PasswordInput: {
    color: "#557B45",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    backgroundColor: "fff",
    borderRadius: 20,
    borderColor: "#fff",
    backgroundColor:'#fff',
    paddingLeft: 60,
    paddingRight: 60,
    textAlign: 'center', 
  },
  buttonLogin: {
    borderWidth: 3,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20 ,
    marginTop: 20,
    padding: 5,
    backgroundColor:'#fff',
    borderColor: "#fff",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#557B45',
  },
  textsingup: {
    color: "#fff",
    top: 10
  },
  singup: {
    color: "lightgreen",
    fontWeight: "bold"
  }
})