import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class App extends React.Component {
  state = {
    email: '',
    password: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Giriş Sayfası</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="E-posta"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Şifre"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Giriş Yap</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Text
            style={styles.forgot} >Şifreni mi unuttun ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  logo: {
    fontWeight: "800",
    fontSize: 46,
    color: "#cb5b5a",
    marginBottom: 50,
    fontStyle:'italic',
    
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",  
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    borderColor:'gray',
    borderWidth:2,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "black",
    fontStyle:'italic',
    fontSize:17
  },
  loginBtn: {
    width: "70%",
    backgroundColor: "#cb5b5a",
    borderRadius: 27,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    fontStyle:'italic'
  },
  loginText: {
    color: "white",
    fontSize:21,
    fontWeight:'800',
    fontStyle:'italic'
  }, 
forgot:{
  fontSize:14,
  fontStyle:'italic'
}
});


