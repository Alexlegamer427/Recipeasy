  import { useState , useCallback} from 'react';
  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, View, TouchableHighlight, ScrollView, Switch, Button, Text, TextInput,Pressable } from 'react-native';
  import { useFocusEffect } from '@react-navigation/native';
  import {styles} from '../styles/styles.js'

  export default function ListRecipee({navigation,route}) {

    const TextColor = '#FFFFFF';

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
        navigation.navigate('FormRecipee', {recipe: randomRecipe });
    };

    const handleAdd = () => {
        navigation.navigate('FormRecipee');
    };
  
  return (

    <View style={styles.centerBox}>
      <View style={styles.listContent}>

          <Text style={{ color: TextColor }}>
              {JSON.stringify(sortedRecipes)}
          </Text>

      </View>

      <View style={styles.bottomBar}>

          <TouchableHighlight style={styles.roundButton } underlayColor="#cc6600" onPress={handleView}>
              <Text style={styles.buttonText}>View</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.roundButton } underlayColor="#cc6600" onPress={handleAdd}>
              <Text style={styles.buttonText}>+</Text>
          </TouchableHighlight>

      </View>
    </View>

  );
}