import React from 'react'
import {View,Text,StyleSheet,StatusBar} from "react-native"

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

const Results = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:"#262d48"}}>
      <StatusBar
        animated={true}
        backgroundColor="#262d48"
      />
    <Text style={[styles.text,{fontSize:20}]}>Results</Text>
    </View>
  )
}

export default Results
