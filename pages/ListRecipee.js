  import { useState , useCallback} from 'react';
  import {  View, TouchableHighlight, Text, FlatList,Pressable  } from 'react-native';
  import { useFocusEffect } from '@react-navigation/native';
  import {styles} from '../styles/styles.js'
  import RecipeItem from '../components/RecipeeItem.js';

  export default function ListRecipee({navigation,route}) {

    const TextColor = '#FFFFFF';

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

  return (

    <View style={styles.centerBox}>

        <View style={styles.listContent}>

            <FlatList

                data={sortedRecipes}

                keyExtractor={(item, index) => `${item.name}-${index}`}

                renderItem={({ item }) => (
                    <RecipeItem 
                        recipe={item} 
                        onPress={() => navigation.navigate('FormRecipee', { recipe: item })}
                    />
                )}

                ItemSeparatorComponent={() => <View style={styles.separator} />}

                ListEmptyComponent={() => (
            
                    <View style={styles.emptyListContainer}>
                        <Text style={styles.emptyListText}>
                            Aucune recette pour l'instant
                        </Text>
                    </View>

                )}

                contentContainerStyle={{ flexGrow: 1 }}
            />

        </View>

      <View style={styles.bottomBar}>

          <TouchableHighlight style={styles.roundButton } underlayColor="#cc6600" onPress={handleAdd}>
              <Text style={styles.buttonText}>+</Text>
          </TouchableHighlight>

      </View>

    </View>

  );
}