  import { useState , useCallback} from 'react';
  import {  View, TouchableHighlight, Text, FlatList,Pressable  } from 'react-native';
  import { useFocusEffect } from '@react-navigation/native';
  import {styles} from '../styles/styles.js'
  import { Ionicons, MaterialCommunityIcons ,MaterialIcons} from '@expo/vector-icons';

  export default function ListRecipee({navigation,route}) {

    const TextColor = '#FFFFFF';
    const breakfastColor = '#ff8000';
    const dinnerColor = '#2196f3';
    const lunchColor = '#4caf50';

    const categoryIcons = {
        1: { lib: Ionicons, name: 'cafe' },                    
        2: { lib: MaterialCommunityIcons, name: 'hamburger' }, 
        3: { lib: MaterialIcons, name: 'dinner-dining' },  
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


    const renderItem = ({ item }) => {
        const iconName = categoryIcons[item.category].name;
        const IconComponent = categoryIcons[item.category].lib;

        return (
            <Pressable
                onPress={() => navigation.navigate('FormRecipee', { recipe: item })}
                style={({ pressed }) => [
                    styles.recipeItem,
                    { opacity: pressed ? 0.6 : 1 }
                ]}
            >
                <View>

                    <IconComponent 
                        name={iconName}
                        size={28} 
                        color={item.category === 1 ? breakfastColor : item.category === 2 ? lunchColor : dinnerColor}
                        style={styles.iconSpacing }
                    />
                    <Text style={styles.recipeDuration}>
                                {formatDuration(item.durationHours, item.durationMinutes)}
                    </Text>

                </View>

                <View style={styles.recipeItemText}>

                    <View style={styles.recipeItemHeader}>

                        <Text style={styles.recipeName} numberOfLines={1}>{item.name}</Text>
                        
                    </View>

                    <Text style={styles.recipeDescription} numberOfLines={1}>
                        {item.description}
                    </Text>

                </View>
        
            </Pressable>
        );
    };

  return (

    <View style={styles.centerBox}>

        <View style={styles.listContent}>

            <FlatList
                data={sortedRecipes}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListEmptyComponent={() => (

                    <Text style={{ color: TextColor, textAlign: 'center', alignSelf: 'center'}}>
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