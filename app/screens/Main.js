import { ImageBackground, SafeAreaView, View, Text, Button, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import bg from "../assets/main.png"

export default function Main() {

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <SafeAreaView>
        </SafeAreaView>
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
  
})