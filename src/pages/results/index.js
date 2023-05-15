import React from 'react'
import {View,Text,StyleSheet,StatusBar} from "react-native"

const Results = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:"#262d48"}}>
      <StatusBar
        animated={true}
        backgroundColor="#262d48"
      />
      <Text>Quizz Level</Text>
    </View>
  )
}

export default Results
