import React from 'react'
import {View,Text,StyleSheet,StatusBar,TouchableOpacity} from "react-native"

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
  },
  option:{
    width:"100%",
    height:60,
    flexShrink: 1,
    borderRadius:20,
    borderWidth:4,
    borderColor:"#2b4967",
    backgroundColor:"transparent",
    marginTop:20,
    alignItems:'center',
    justifyContent:'center'
  }
})

const Choises = ({navigation}) => {
  return (
    <View style={styles.container}>
     <StatusBar
      animated={true}
      backgroundColor="#262d48"
     />
     <View style={{width:"100%",marginTop:30,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
       <TouchableOpacity>
         <Text style={{color:"#fff",fontSize:20,fontWeight:'500'}}>Show Results</Text>
       </TouchableOpacity>
     </View>
    </View>
  )
}

export default Choises
