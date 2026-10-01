  import { useState } from 'react';
  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, View, TouchableHighlight, ScrollView, Switch, Button, Text, TextInput,Pressable } from 'react-native';
  import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
  import { Picker } from '@react-native-picker/picker';
  import RadioGroup from 'react-native-radio-buttons-group';
  import {styles} from '../styles/styles.js'

  export default function ListRecipeePage({navigation}) {
  return (

    <View style={styles.centerBox}>
          <TouchableHighlight underlayColor="#cc6600"  onPress={() => navigation.navigate('FormRecipee', { mode: 'add' })}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableHighlight>
    </View>

  );
}