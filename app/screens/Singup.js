import { ImageBackground, View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import background from '../assets/8.png'
import axios from 'axios';


export default function Singup({ navigation }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    if (name === '' || email === '' || password === ''){
      alert("Todos os campos devem ser preenchidos");
      return;
    }
    const resp = await axios.post("http://localhost:8001/api/signup", { name, email, password});
    alert("Cadastro realizado com sucesso.");
  }

  return (

      <View style={styles.container}>
        <ImageBackground source={background} resizeMode="cover" style={styles.image}>
          <Text style={styles.Title}>SINGUP</Text>
          <TextInput
          style={styles.NameInput}
          onChangeText={(text) => setName(text)}
          value={name}
          autoCapitalize="words"
          autoCorrect={false}
          placeholder='Digite seu nome'
          />
          <TextInput
          style={styles.EmailInput}
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCompleteType='email' keyboardType='email-address'
          placeholder='Digite seu e-mail'
          />
          <TextInput
            style={styles.PasswordInput}
            value={password}
            placeholder='Digite sua senha'
            autoCompleteType="password"
            secureTextEntry={true}
            onChageNumber={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.buttonSingup} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sing up</Text>
          </TouchableOpacity>
          <Text style={styles.textlogin}> Já possui uma conta?
            <Text style={styles.login}
                  onPress={() => navigation.navigate("Login")}
            > Log in</Text>
          </Text>
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
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  Title:{
    fontSize: 45,
    color: "#fff",
    fontWeight: 'bold',
    bottom: '10%'
  },
  NameInput: {
    color: "#557B45",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    backgroundColor: "fff",
    borderRadius: 20,
    borderColor: "#fff",
    backgroundColor:'#fff',
    paddingLeft: 70,
    paddingRight: 70,
    textAlign: 'center', 
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
    paddingLeft: 70,
    paddingRight: 70,
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
    paddingLeft: 70,
    paddingRight: 70,
    textAlign: 'center', 
  },
  buttonSingup: {
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
  textlogin: {
    color: "#fff",
    top: 10
  },
  login: {
    color: "lightgreen",
    fontWeight: "bold"
  }
})