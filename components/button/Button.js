import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Button = ({label,href,}) => {
  return (
    <Pressable onPress={href} style={{paddingVertical:7,paddingHorizontal: 17,display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 100, backgroundColor: 'black'}}> 
      <Text style={{textAlign: 'center', color: 'white', fontFamily: 'Poppins-SemiBold', fontSize: 18}}>{label}</Text>
    </Pressable>
  )
}

export default Button 