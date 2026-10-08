  import { useState , useCallback} from 'react';
  import {  View, TouchableHighlight, Text, FlatList,Pressable  } from 'react-native';
  import { useFocusEffect } from '@react-navigation/native';
  import {styles} from '../styles/styles.js'
  import { Ionicons } from '@expo/vector-icons';

  export default function ListRecipee({navigation,route}) {

    const TextColor = '#FFFFFF';

    const categoryIcons = {
        1: 'egg-outline',      
        2: 'fast-food-outline', 
        3: 'restaurant-outline', 
    };

    const formatDuration = (hours, minutes) => {
        const paddedMinutes = minutes.toString().padStart(2, '0');
        return `${hours}h${paddedMinutes}`;
    };


    const [recipes, setRecipes] = useState([
        { category: 1, name: 'A0', durationHours: 0, durationMinutes: 4, description: 'aa aaa aaaaaaa' },
        { category: 2, name: 'B0', durationHours: 1, durationMinutes: 30, description: 'ffffff' },
        { category: 3, name: 'C0', durationHours: 1, durationMinutes: 30, description: ' cc' },
        { category: 1, name: 'A1', durationHours: 0, durationMinutes: 4, description: 'zzaaa' },
        { category: 2, name: 'B1', durationHours: 1, durationMinutes: 30, description: 'eeeeeee' },
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

    const renderItem = ({ item }) => (
            <Pressable
                onPress={() => navigation.navigate('FormRecipee', { recipe: item })}
                style={({ pressed }) => [
                    styles.recipeItem,
                    { opacity: pressed ? 0.6 : 1 }
                ]}
            >
                <Ionicons 
                    name={categoryIcons[item.category]} 
                    size={28} 
                    color="#FFFFFF" 
                    style={{ marginRight: 12 }}
                />

                <View style={styles.recipeItemText}>
                    <View style={styles.recipeItemHeader}>
                        <Text style={styles.recipeName}>{item.name}</Text>
                        <Text style={styles.recipeDuration}>
                            {formatDuration(item.durationHours, item.durationMinutes)}
                        </Text>
                    </View>
                    <Text style={styles.recipeDescription} numberOfLines={1}>
                        {item.description}
                    </Text>
                </View>
            </Pressable>
        );

  return (

    <View style={styles.centerBox}>
        <View style={styles.listContent}>
            <FlatList
                data={sortedRecipes}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListEmptyComponent={() => (
                    <Text style={{ color: TextColor, textAlign: 'center', marginTop: 20 }}>
                        Aucune recette pour l'instant
                    </Text>
                )}
            />
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