
import { Text,Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {styles} from './styles/styles.js'
import SignIn  from './pages/SignIn.js';
import FormRecipee  from './pages/FormRecipee.js';
import ListRecipee from './pages/ListRecipee.js';
import SignUp from './pages/SignUp.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.baseContainer}>
      <Stack.Navigator 
        initialRouteName="SignIn" 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#54008b',   
          },
          headerTintColor: '#FFFFFF', 
        }}
      >
        <Stack.Screen name="SignIn" component={ SignIn  } />

        <Stack.Screen name="SignUp" component={ SignUp  } />

        <Stack.Screen name="FormRecipee" component={ FormRecipee  } />

        <Stack.Screen name="ListRecipee" component={ ListRecipee  } 
          options={({ navigation }) => ({
              headerRight: () => (
                  <Pressable 
                      onPress={() => navigation.reset({ index: 0, routes: [{ name: 'SignIn' }] })}
                      style={{ marginRight: 15 }}
                  >
                      <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Log out</Text>
                  </Pressable>
              ),
              headerLeft: () => null,
              headerBackVisible: false,
              gestureEnabled: false,       
          })} 
        />       
      </Stack.Navigator>
    </NavigationContainer>
  );
}


