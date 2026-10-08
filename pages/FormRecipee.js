import { useState } from 'react';
import { View, TouchableHighlight, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RadioGroup from 'react-native-radio-buttons-group';
import {styles} from '../styles/styles.js'
import ToastManager, { Toast } from 'toastify-react-native'

export default function FormRecipee({navigation , route}) {

    const { mode, recipe } = route.params || {};

    const [recipeData, setRecipeData] = useState({
        category: recipe?.category?.toString() ?? null,
        name: recipe?.name ?? '',
        durationHours: recipe?.durationHours ?? 0,
        durationMinutes: recipe?.durationMinutes ?? 0,
        description: recipe?.description ?? '',
    });

    const updateField = (field, value) => {
        setRecipeData(prev => ({ ...prev, [field]: value }));
    };

    const isEdit = mode === 'edit'; 

    const [selectedId, setSelectedId] = useState(recipe?.category?.toString() ?? null);
    const [name, setName] = useState(recipe?.name ?? '');
    const [hours, setHours] = useState(recipe?.durationHours ?? 0);
    const [minutes, setMinutes] = useState(recipe?.durationMinutes ?? 0);
    const [description, setDescription] = useState(recipe?.description ?? '');

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
        let messages = '';

        if (!recipeData.category) messages += 'Catégorie requise\n';

        if (!recipeData.name.trim()) messages += 'Nom requis\n';

        if (recipeData.durationHours < 0 || recipeData.durationHours > 12) messages += 'Heures doivent être entre 0 et 12\n';

        if (recipeData.durationMinutes < 0 || recipeData.durationMinutes > 59) messages += 'Minutes doivent être entre 0 et 59\n';

        if (recipeData.durationHours === 0 && recipeData.durationMinutes === 0) messages += 'Durée doit être supérieure à 0\n';

        return messages === '' ? null : messages;
    };

    const handleSave = () => {
        const validationError = validate();
        if (validationError) {
            Toast.error(validationError);
            return;
        }

        const newRecipe = {
            category: parseInt(recipeData.category),
            name: recipeData.name,
            durationHours: recipeData.durationHours,
            durationMinutes: recipeData.durationMinutes,
            description: recipeData.description,
        };

        navigation.navigate('ListRecipee', { newRecipe });
    };

    const handleDelete = () => {
        navigation.navigate('ListRecipee'); 
    };

  return (
    <View style={styles.centerBox}>
        <ToastManager />
        <View style={[styles.recipeContainer]}>

            <View style={[styles.rowContainer]}>
                    <RadioGroup  
                        radioButtons={radioButtons} 
                        onPress={(id) => updateField('category', id)}
                        selectedId={recipeData.category}
                        layout='row'
                        labelStyle={{ color: '#FFFFFF' }}
                    />
            </View>

            <TextInput 
                style={[styles.nameInputBox]} 
                placeholderTextColor='#FFFFFF'  
                placeholder="Name"                 
                value={recipeData.name}
                onChangeText={(text) => updateField('name', text)}
            />
            
            <View style={styles.pickerRow}>

                <Text style={styles.regulartext}>Duration</Text>

                <Picker 
                    style={styles.picker}
                    selectedValue={recipeData.durationHours}
                    onValueChange={(value) => updateField('durationHours', value)}
                >
                    {hoursArray.map((h) => (
                        <Picker.Item key={h} label={`${h}h`} value={h} color={colorListText} />
                    ))}
                </Picker>

                <Text style={styles.regulartext}> : </Text>

                <Picker 
                    style={styles.picker}
                    selectedValue={recipeData.durationMinutes}
                    onValueChange={(value) => updateField('durationMinutes', value)}
                >
                    {minutesArray.map((m) => (
                        <Picker.Item key={m} label={`${m} mins`} value={m} color={colorListText} />
                    ))}
                </Picker>

            </View>

            <TextInput 
                style={styles.descriptionInput} 
                placeholder="Description"
                value={recipeData.description}
                onChangeText={(text) => updateField('description', text)}
                placeholderTextColor='#FFFFFF'
                multiline={true}
            />

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
