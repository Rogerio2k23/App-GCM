import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const URL = 'http://localhost:3000/usuarios';

async function chamarApi() {
  const resp = await fetch(URL);
  if (resp.status === 200) {
    const obj = await resp.json();
    console.log(obj);
  }
}
chamarApi();
export default function App() {


const [nome, setNome] = useState('');  
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const cadastro = () => {
  alert('Cadastrado com sucesso!')
}

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Image style={{marginTop:150, width:150,height:150}} source={require('./assets/adaptive-icon.png')} />

              <TextInput placeholder='Sua matrícula...' style={styles.TextInput} onChangeText={text=>setNome(text)}/>
              <TextInput secureTextEntry={true} placeholder='Sua senha...' style={styles.TextInput} onChangeText={text=>setSenha(text)}/>

              <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
                <Text style={{color:'white', textAlign:'center'}}>Login</Text>
              </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00314f',
    alignItems: 'center',
    
    padding:20,
    
  },
  TextInput: {
    width:'100%',
    height:40,
    backgroundColor:'#F5F5F5',
    borderRadius:20,
    paddingLeft:50,
    marginBottom:10

},
btnCadastro:{
    width:'100%',
    height:40,
    backgroundColor:'#9370DB',
    borderRadius:100,
    marginBottom:30,
    justifyContent:'center'
}
});
