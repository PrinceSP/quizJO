import React, {useEffect} from 'react'
import {View,Image,StatusBar} from 'react-native'
import {Logo} from "../../assets"

const SplashScreen = ({navigation})=>{
  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace('Home')
    },1000)
  },[])

  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:"#262d48"}}>
      <StatusBar
        animated={true}
        backgroundColor="#262d48"
      />
      <Image source={Logo} style={{height:600,width:600}}/>
    </View>
  )
}

export default SplashScreen
