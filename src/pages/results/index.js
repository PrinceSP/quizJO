import React from 'react'
import {View,Text,StyleSheet,StatusBar} from "react-native"
import {Done} from "../../assets"

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'flex-start',
    backgroundColor:"#262d48",
    paddingHorizontal:30,
    paddingVertical:20
  },
  text:{
    color:"#9098bc",
    fontWeight:'600',
  }
})

const Results = ({route,navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:"#262d48"}}>
      <StatusBar
        animated={true}
        backgroundColor="#262d48"
      />
      <Text style={[styles.text,{fontSize:30,position:"absolute",top:10}]}>YOUR RESULTS</Text>
      <Done height={200} width={200}/>
      <Text style={[styles.text,{fontSize:24}]}>Score: {route.params.score[0]} / {route.params.score[1]}</Text>
    </View>
  )
}

export default Results
