import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableHighlight, ScrollView, Switch, Button, Text, TextInput,Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import RadioGroup from 'react-native-radio-buttons-group';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInPage  from './pages/SignIn.js';
import FormRecipee  from './pages/FormRecipee.js';
import SignUpPage from './pages/SignUp.js';
import {styles} from './styles/styles.js'


const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <SafeAreaProvider>
      <SafeAreaView style={styles.baseContainer}>
          
            <NavigationContainer>
              <Stack.Navigator initialRouteName="SignUpPage">
                <Stack.Screen name="SignInPage" component={ SignInPage  } />
                <Stack.Screen name="SignUpPage" component={ SignUpPage  } />
                <Stack.Screen name="FormRecipee" component={ FormRecipee  } />
              </Stack.Navigator>
            </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}


