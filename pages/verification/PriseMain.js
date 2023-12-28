import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { Dimensions, StyleSheet, Text, View, } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import Button from '../../components/button/Button';


export default function PriseMain({ navigation: { navigate } }) {
  const [fontsLoaded] = useFonts({
    'MonumentExtended-Regular': require('../../assets/fonts/MonumentExtended/MonumentExtended-Regular.otf'),
    'Poppins-Light': require('../../assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: 'MonumentExtended-Regular', fontSize: 25,  }}>Dress</Text>
      <View style={{
        width: '100%',
        height: 309.72,
        marginBottom: Dimensions.get('window').height*0.015
      }}>
      <Image
        source={require('../../assets/images_app/Login.png')}
        style={{width: '100%',height: "100%"}}
      />
      </View>
      <Text style={{ fontFamily: 'MonumentExtended-Regular', fontSize: 25,textAlign: 'center' }}>Votre application de pressing</Text>
      <Text style={{ fontFamily: 'Poppins-Light', fontSize: 17, textAlign: 'center', color: '#606060' }}>Vous aide dans l’entretien de vos vêtements en tous genre et vous livre partout à Abidjan</Text>
      <View style={{ flex:1, justifyContent: 'flex-end', marginBottom:10}}>
      <Button label={"Commencer"} href={() => navigate("SignIn")}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:40,
    paddingTop: Dimensions.get('window').height*0.15,
    gap: Dimensions.get('window').height*0.015
  },
});
