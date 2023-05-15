import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home,Quizzes,Results,SplashScreen} from '../pages'

const {Navigator,Screen} = createNativeStackNavigator()

const Routes = ()=>{
  return(
    <Navigator>
      <Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
      <Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Screen name="Quizzes" component={Quizzes} options={{headerShown:false}}/>
      <Screen name="Results" component={Results} options={{headerShown:false}}/>
    </Navigator>
  )
}

export default Routes
