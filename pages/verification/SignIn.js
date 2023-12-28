import { View, Text, TextInput, Dimensions, RootTagContext, ScrollView } from 'react-native'
import { useFonts } from 'expo-font';
import React, { useCallback, useContext, useState } from 'react'
import Button from '../../components/button/Button';
import * as SplashScreen from 'expo-splash-screen';
import Checkbox from 'expo-checkbox';
import { AuthContext, } from '../../context/AuthContext';
import axios from 'axios';




const SignIn = ({navigation: { navigate }}) => {
   
    const {nom,numero, email, pwd, setNom,setNumero,setEmail,setPwd} = useContext(AuthContext)
   
    const baseUrl = 'http://localhost:8080/app';
    const _OnSubmitSign = async () =>{
        console.log(nom,
            pwd,
            email,)
        const numero ="01235467"
        const apiRoute = '${baseUrl}/client'
        try{
            await axios.post('http://localhost:8080/app/client', {
                "clientNames": "sdsllAnge ssss",
        "clientAdresse": "zz",
        "clientMail": "ask@dd.com",
        "clientTelephone": "07854963"
          
            }).then(function(response){
                console.log(response)
            }).catch(function(error){
                console.log("Ereure d'enregistrement ",error)
            });
        }catch (error) {
            alert("An error has occurred Connexion Api");
            console.log(error)
        }

    }
    const [isChecked, setChecked] = useState(false);
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
        <View style={{marginBottom: 40}}>

            <Text style={{fontFamily: 'MonumentExtended-Regular', fontSize: 22}}>Sign In</Text>
        </View>
        
        <View style={{width:'100%', marginBottom:20}}>
            <Text style={{fontSize: 22, fontFamily: 'Poppins-Regular'}}>
                Nom complet
            </Text>
            <Text style={{fontSize: 15, color:'#888888',fontFamily: 'Poppins-Regular'}}>
                Votre nom complet
            </Text>
            <View style={{flexDirection:'row', gap:10, alignItems: 'center', marginTop: 15}}>
            <TextInput keyboardType='default'  onChangeText={(textNom)=>setNom(textNom)} textContentType='name' placeholder='Ange Kano' style={{paddingVertical:7, paddingHorizontal:22, borderRadius: 100, backgroundColor: "#F3F3F3",fontFamily: 'Poppins-Regular',width: 290}}/>
            </View>
        </View>

        <View style={{width:'100%', marginBottom:20}}>
            <Text style={{fontSize: 22, fontFamily: 'Poppins-Regular'}}>
            Numéro de téléphone
            </Text>
            <Text style={{fontSize: 15, color:'#888888',fontFamily: 'Poppins-Regular'}}>
            Entrer votre numéro de téléphone valide
            </Text>
            <View style={{flexDirection:'row', gap:10, alignItems: 'center', marginTop: 15}}>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 17}}>+225</Text>
            <TextInput keyboardType='number-pad'  onChangeText={(textNom)=>setNumero(textNom)} textContentType='telephoneNumber' placeholder='01 51 83 16 81' style={{paddingVertical:7, paddingHorizontal:22, borderRadius: 100, backgroundColor: "#F3F3F3",fontFamily: 'Poppins-Regular'}}/>
            </View>
        </View>

        <View style={{width:'100%', marginBottom:20}}>
            <Text style={{fontSize: 22, fontFamily: 'Poppins-Regular'}}>
                Email
            </Text>
            <Text style={{fontSize: 15, color:'#888888',fontFamily: 'Poppins-Regular'}}>
                Entrez votre adresse mail
            </Text>
            <View style={{flexDirection:'row', gap:10, alignItems: 'center', marginTop: 15}}>
            <TextInput keyboardType='default'  onChangeText={(textNom)=>setEmail(textNom)}textContentType='emailAddress' placeholder='AngeKano002@gmail.com' style={{paddingVertical:7, paddingHorizontal:22, borderRadius: 100, backgroundColor: "#F3F3F3",fontFamily: 'Poppins-Regular',width: 290}}/>
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
            <TextInput keyboardType='default' onChangeText={(textNom)=>setPwd(textNom)} textContentType='password' secureTextEntry placeholder='8 charactère maximum' style={{paddingVertical:7, paddingHorizontal:22, borderRadius: 100, backgroundColor: "#F3F3F3",fontFamily: 'Poppins-Regular',width:290}}/>
            </View>
            
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', width: '100%',marginVertical: 25, gap: 10}}>
        <Checkbox style={{borderRadius:5 }} value={isChecked} onValueChange={setChecked} />
        <Text >Oui, J’accepte les conditions d’utilisation</Text>
        </View>

        <View style={{ flex:1, justifyContent: 'flex-end', marginBottom:10}}>
            <Button label={"Inscription"} href={() => _OnSubmitSign()}/>
        </View>

        </View>
  )
}

export default SignIn