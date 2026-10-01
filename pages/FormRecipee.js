import { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableHighlight, ScrollView, Switch, Button, Text, TextInput,Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import RadioGroup from 'react-native-radio-buttons-group';
import {styles} from '../styles/styles.js'
import { useFocusEffect } from '@react-navigation/native';

export default function FormRecipee({navigation , route}) {

    const { mode, recipe } = route.params || {};
    const isEdit = mode === 'edit';

    const [selectedId, setSelectedId] = useState();
    const [name, setName] = useState(recipe?.name ?? '');
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [description, setDescription] = useState(recipe?.description ?? '');
    const [error, setError] = useState('');

    const hoursArray = Array.from({ length: 13 }, (_, i) => i);
    const minutesArray = Array.from({ length: 60 }, (_, i) => i);
   
    const colorListText = '#000000';
    const whiteColor = '#FFFFFF';

    const radioButtons = [
        { id: '1', label: 'Breakfast', color: whiteColor, borderColor: whiteColor },
        { id: '2', label: 'Lunch', color: whiteColor, borderColor: whiteColor },
        { id: '3', label: 'Dinner', color: whiteColor, borderColor: whiteColor },
    ];

    const validate = () => {
        if (!selectedId) return 'Catégorie requise';
        if (!name.trim()) return 'Nom requis';
        if (hours < 0 || hours > 12) return 'Heures doivent être entre 0 et 12';
        if (minutes < 0 || minutes > 59) return 'Minutes doivent être entre 0 et 59';
        if (hours === 0 && minutes === 0) return 'Durée doit être supérieure à 0';
        return null;
    };

    const handleSave = () => {
        const validationError = validate();
        if (validationError) {
            setError(validationError);
            return;
        }

        const newRecipe = {
            category: parseInt(selectedId),
            name,
            durationHours: hours,
            durationMinutes: minutes,
            description,
        };

        navigation.navigate('ListRecipeePage', { newRecipe });
    };

    const handleDelete = () => {
        navigation.navigate('ListRecipeePage'); 
    };

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

            <TextInput 
                style={[styles.nameInputBox]} 
                placeholderTextColor='#FFFFFF'  
                placeholder="Name"                 
                value={name}
                onChangeText={setName}
            />
            
            <View style={styles.pickerRow}>
                <Text style={styles.regulartext}>Duration</Text>
                <Picker 
                    style={styles.picker}
                    selectedValue={hours}
                    onValueChange={(value) => setHours(value)}
                >
                    {hoursArray.map((h) => (
                        <Picker.Item key={h} label={`${h}h`} value={h} color={colorListText} />
                    ))}
                </Picker>

                <Text style={styles.regulartext}> : </Text>

                <Picker 
                    style={styles.picker}
                    selectedValue={minutes}
                    onValueChange={(value) => setMinutes(value)}
                >
                    {minutesArray.map((m) => (
                        <Picker.Item key={m} label={`${m} mins`} value={m} color={colorListText} />
                    ))}
                </Picker>
            </View>

            <TextInput 
                style={styles.descriptionInput} 
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                placeholderTextColor='#FFFFFF'
                multiline={true}
            />
        
            {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

            {!isEdit && (
                <TouchableHighlight style={styles.save} onPress={handleSave} underlayColor="#f57f17">
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
            )}

            {isEdit && (
                <TouchableHighlight style={styles.save} onPress={handleDelete} underlayColor="#f57f17">
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableHighlight>
            )}

            </View>
    </View>

  );
}
