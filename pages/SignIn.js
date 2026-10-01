import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableHighlight, ScrollView, Switch, Button, Text, TextInput,Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import RadioGroup from 'react-native-radio-buttons-group';
import {styles} from '../styles/styles.js'

export default function SignInPage({navigation}) {
    return (
     
      <View style={styles.centerBox}>

          <TextInput  style={[styles.inputBox]} placeholderTextColor='#FFFFFF' placeholder="Username" />
          
          <TextInput style={[styles.inputBox]} placeholderTextColor='#FFFFFF'  placeholder="Password" />
          
          <TouchableHighlight style={styles.login} onPress={() => navigation.navigate('ListRecipeePage')} underlayColor="#f57f17">
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableHighlight>

          <Pressable onPress={() => navigation.navigate('SignUpPage')}>
            <Text style={styles.link}>Sign up!</Text>
          </Pressable>

      </View>

    );
 }
