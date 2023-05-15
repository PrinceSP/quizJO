import React,{useState} from 'react'
import {Platform,View,Text,StyleSheet,StatusBar,TextInput,KeyboardAvoidingView} from "react-native"
import {HomeIllustrations} from "../../assets"
import {Button} from "../../components"

const styles = StyleSheet.create({
  container:{
    flex:1,alignItems:'center',backgroundColor:"#262d48",position:'relative',paddingTop:40,paddingHorizontal:20
  },
  text:{
    color:"#fff",
    fontWeight:'600'
  },
  startBtn:{
    width:"100%",
    padding:16,
    backgroundColor:"#357ee3",
    borderRadius:14,
    alignItems:"center",
    marginTop:30
  },
  btnText:{
    color:"#fff",
    fontWeight:"500",
    fontSize:22
  },
  input:{
    marginTop:60,
    width:"100%",
    paddingTop:10,
    paddingHorizontal:20,
    borderRadius:30,
    borderWidth:4,
    borderColor:"#284866",
    backgroundColor:"transparent",
    color:"#fff",
    fontSize:18
  }
})

const Home = ({navigation}) => {
  const [name,setName] = useState("")
  console.log(name);
  return (
    <KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#262d48"
      />
      <Text style={[styles.text,{fontSize:30}]}>QuizJO</Text>
      <HomeIllustrations height={350} width={350}/>
      <TextInput
        placeholderTextColor="#999"
        placeholder="Input your name here"
        style={styles.input}
        onChangeText={setName}
        defaultValue={name}
      />
    {name==="" ? null : <Button name="Start" press={()=>navigation.navigate('Quizzes')}  more={{text:styles.btnText,btn:styles.startBtn}}/>}
    </KeyboardAvoidingView>
  )
}

export default Home
