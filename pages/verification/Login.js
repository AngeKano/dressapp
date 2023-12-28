import { View, Text, TextInput, Dimensions } from 'react-native'
import { useFonts } from 'expo-font';
import React, { useCallback } from 'react'
import Button from '../../components/button/Button';
import * as SplashScreen from 'expo-splash-screen';


const Login = ({navigation: { navigate }}) => {
  const [fontsLoaded] = useFonts({
    'MonumentExtended-Regular': require('../../assets/fonts/MonumentExtended/MonumentExtended-Regular.otf'),
    'Poppins-Light': require('../../assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{backgroundColor:'white', flex:1, alignItems: 'center',paddingHorizontal:40,
    paddingTop: Dimensions.get('window').height*0.05,  }} onLayout={onLayoutRootView} >
      <View style={{marginBottom: 70}}>

        <Text style={{fontFamily: 'MonumentExtended-Regular', fontSize: 22}}>Login</Text>
      </View>

      <View style={{width:'100%', marginBottom:26}}>
        <Text style={{fontSize: 22, fontFamily: 'Poppins-Regular'}}>
          Numéro de téléphone
        </Text>
        <Text style={{fontSize: 15, color:'#888888',fontFamily: 'Poppins-Regular'}}>
          Entrer votre numéro de téléphone valide
        </Text>
        <View style={{flexDirection:'row', gap:10, alignItems: 'center', marginTop: 15}}>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 17}}>+225</Text>
          <TextInput keyboardType='number-pad' textContentType='telephoneNumber' placeholder='01 51 83 16 81' style={{paddingVertical:7, paddingHorizontal:22, borderRadius: 100, backgroundColor: "#F3F3F3",fontFamily: 'Poppins-Regular'}}/>
        </View>
        
      </View>

      <View style={{width:'100%'}}>
        <Text style={{fontSize: 22, fontFamily: 'Poppins-Regular'}}>
          Mot de passe
        </Text>
        <Text style={{fontSize: 15, color:'#888888',fontFamily: 'Poppins-Regular'}}>
          Veillez à ce qu’il reste secret
        </Text>
        <View style={{flexDirection:'row', gap:10, alignItems: 'center',marginTop: 15}}>
          <TextInput keyboardType='default' textContentType='password' secureTextEntry placeholder='8 charactère maximum' style={{paddingVertical:7, paddingHorizontal:22, borderRadius: 100, backgroundColor: "#F3F3F3",fontFamily: 'Poppins-Regular',width:290}}/>
        </View>
        
      </View>

      <View style={{ flex:1, justifyContent: 'flex-end', marginBottom:10}}>
        <Button label={"Connexion"} href={() => navigate("Dashboard")}/>
      </View>

    </View>
  )
}

export default Login