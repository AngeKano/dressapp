
import {Text, View} from 'react-native';
import { AuthProvider } from './context/AuthContext';
import Navigation from './navigation/navigation';


export default function App() {
 
  return (
        <AuthProvider>
          <Navigation/>
        </AuthProvider>
        
  );
}