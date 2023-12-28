
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import PriseMain from '../pages/verification/PriseMain';
import Login from "../pages/verification/Login";
import SignIn from "../pages/verification/SignIn";
import NavDashboard from "./navDashboard";

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
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="NavDashboard" component={NavDashboard} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigation