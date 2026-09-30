import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableHighlight, ScrollView, Switch, Button, Text, TextInput,Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import RadioGroup from 'react-native-radio-buttons-group';
import {styles} from '../styles/styles.js'

export default function FormRecipee() {

    //a rajouter  un tableau pour simplifier + centraliser les modifs
    const [selectedId, setSelectedId] = useState();
     const radioButtons = [
        {
            id: '1',
            label: 'Breakfast',
            value: 'breakfast', 
            color: '#FFFFFF', 
            borderColor: '#FFFFFF'
        },
        {
            id: '2',
            label: 'Lunch',
            value: 'lunch', 
            color: '#FFFFFF', 
            borderColor: '#FFFFFF'
        },
        {
            id: '3',
            label: 'Dinner',
            value: 'dinner', 
            color: '#FFFFFF', 
            borderColor: '#FFFFFF'
        }
    ];

  return (
    <View style={styles.centerBox}>
        <View style={[styles.recipeContainer]}>
            <View style={[styles.rowContainer]}>
                    <RadioGroup  
                        radioButtons={radioButtons} 
                        onPress={setSelectedId}
                        selectedId={selectedId}
                        layout='row'
                        labelStyle={{ color: '#FFFFFF' }}
                    />
            </View>

            <TextInput style={[styles.nameInputBox]} placeholderTextColor='#FFFFFF'  placeholder="Name" />
            
            <View style={styles.pickerRow}>
                <Text style={styles.regulartext}>Duration</Text>
                <Picker style={styles.picker}>
                    <Picker.Item label="0h" value="1" />
                    <Picker.Item label="1h" value="2" />
                </Picker>

                <Text style={styles.regulartext}> : </Text>

                <Picker style={styles.picker}>
                    <Picker.Item label="0 mins" value="1" />
                    <Picker.Item label="1 mins" value="2" />
                </Picker>
            </View>

            <TextInput 
                style={styles.descriptionInput} 
                placeholder="Description"
                placeholderTextColor='#FFFFFF'
                multiline={true}
            />
        
            <TouchableHighlight style={styles.save} onPress={() => console.log('sign in')} underlayColor="#f57f17">
                <Text style={styles.buttonText}>Save</Text>
            </TouchableHighlight>
            </View>
    </View>
    
  );
}
