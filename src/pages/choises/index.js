import React from 'react'
import {View,Text,StyleSheet,StatusBar,TouchableOpacity} from "react-native"
import {Finish} from "../../assets"

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:"#262d48",
    paddingHorizontal:30,
    paddingVertical:20
  },
  text:{
    color:"#9098bc",
    fontWeight:'600',
    marginBottom:100
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

const Choises = ({route,navigation}) => {
  console.log(route.params);
  return (
    <View style={styles.container}>
     <StatusBar
      animated={true}
      backgroundColor="#262d48"
     />
     <Text style={[styles.text,{fontSize:30}]}>Game has ended</Text>
     <Finish height={200} width={200}/>
     <View style={{width:"100%",marginTop:30,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
       <TouchableOpacity onPress={()=>navigation.navigate('Results',{name:route.params.name,score:route.params.score})} style={{width:"45%",height:50,alignItems:'center',justifyContent:'center',backgroundColor:"#357ee3",borderRadius:20,marginTop:30}}>
         <Text style={{color:"#fff",fontSize:20,fontWeight:'500'}}>Show Results</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.navigate("Quizzes",{name:route.params.name})} style={{width:"45%",height:50,alignItems:'center',justifyContent:'center',borderColor:"#2b4967",backgroundColor:"transparent",borderWidth:4,borderRadius:20,marginTop:30}}>
         <Text style={{color:"#fff",fontSize:20,fontWeight:'500'}}>Try again</Text>
       </TouchableOpacity>
     </View>
     <TouchableOpacity style={{width:"100%",height:50,alignItems:'center',justifyContent:'center',backgroundColor:"#357ee3",borderRadius:20,marginTop:30}}>
       <Text style={{color:"#fff",fontSize:20,fontWeight:'500'}}>Home</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Choises
