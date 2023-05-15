import React from 'react'
import {TouchableOpacity,Text} from 'react-native'

const Button = ({name,press,more}) => {
  return (
    <TouchableOpacity onPress={press} style={more.btn}>
      <Text style={more.text}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Button
