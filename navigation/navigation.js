
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import PriseMain from '../pages/verification/PriseMain';
import Login from "../pages/verification/Login";

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="PriseMain"
        screenOptions={{
          headerShown: false,
        }}>
            <Stack.Screen name="PriseMain" component={PriseMain} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigation