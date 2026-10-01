  import { useState , useCallback} from 'react';
  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, View, TouchableHighlight, ScrollView, Switch, Button, Text, TextInput,Pressable } from 'react-native';
  import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
  import { Picker } from '@react-native-picker/picker';
  import { useFocusEffect } from '@react-navigation/native';
  import RadioGroup from 'react-native-radio-buttons-group';
  import {styles} from '../styles/styles.js'

  export default function ListRecipeePage({navigation,route}) {

    const [recipes, setRecipes] = useState([
        {category: 1, name: 'A0', durationHours: 0, durationMinutes: 4, description: 'aa aaa aaaaaaa' },
        {category: 2, name: 'B0', durationHours: 1, durationMinutes: 30, description: 'bb bbbb b bbb b bbbbh' },
    ]);

    useFocusEffect(
        useCallback(() => {
            const newRecipe = route.params?.newRecipe;
            if (newRecipe) {
                setRecipes(prev => [...prev, newRecipe]);
                navigation.setParams({ newRecipe: undefined }); 
            }
        }, [route.params?.newRecipe])
    );

    const sortedRecipes = [...recipes].sort((a, b) => a.name.localeCompare(b.name));

        const handleView = () => {
        if (recipes.length == 0) {
            console.log('Aucune recette à afficher');
            return;
        }
        const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
        navigation.navigate('FormRecipee', { mode: 'edit', recipe: randomRecipe });
    };

    const handleAdd = () => {
        navigation.navigate('FormRecipee', { mode: 'add' });
    };
  
  return (

    <View style={styles.centerBox}>
          <TouchableHighlight underlayColor="#cc6600"  onPress={handleAdd}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#cc6600"  onPress={handleView}>
            <Text style={styles.buttonText}>View</Text>
          </TouchableHighlight>
          <Text style={{ color: '#FFFFFF' }}>
                {JSON.stringify(sortedRecipes)}
          </Text>
    </View>

  );
}