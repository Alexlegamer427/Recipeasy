  import { useState , useCallback} from 'react';
  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, View, TouchableHighlight, ScrollView, Switch, Button, Text, TextInput,Pressable } from 'react-native';
  import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
  import { Picker } from '@react-native-picker/picker';
  import RadioGroup from 'react-native-radio-buttons-group';
  import {styles} from '../styles/styles.js'
  import { useFocusEffect } from '@react-navigation/native';

  export default function SignUpPage({navigation}) {
  return (

    <View style={styles.centerBox}>
          <TextInput  style={[styles.inputBox]} placeholderTextColor='#FFFFFF' placeholder="Username" />
          
          <TextInput style={[styles.inputBox]} placeholderTextColor='#FFFFFF'  placeholder="Password" />

          <TextInput style={[styles.inputBox]} placeholderTextColor='#FFFFFF'  placeholder="Password Confirmation" />

          <TouchableHighlight style={styles.createAccountButton} onPress={() => navigation.navigate('ListRecipeePage') } underlayColor="#cc6600">
            <Text style={styles.buttonText}>Sign up</Text> 
          </TouchableHighlight>
          
    </View>

  );
}