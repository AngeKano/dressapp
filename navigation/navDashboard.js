import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../pages/dashboard/Dashboard';
import Service from '../pages/dashboard/Service';

const Tab = createBottomTabNavigator();
const NavDashboard = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: { position: 'absolute' },
    }}>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Service" component={Service} />
    </Tab.Navigator>

  )
}

export default NavDashboard