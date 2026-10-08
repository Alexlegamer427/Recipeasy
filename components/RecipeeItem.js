import { View, Text, Pressable } from 'react-native';
import { styles } from '../styles/styles.js';
import { Ionicons, MaterialCommunityIcons ,MaterialIcons} from '@expo/vector-icons';


const categoryIcons = {

    1: { lib: Ionicons, name: 'cafe' },
    2: { lib: MaterialCommunityIcons, name: 'hamburger' },
    3: { lib: MaterialIcons, name: 'dinner-dining' },
};

const breakfastColor = '#ff8000';
const lunchColor = '#4caf50';
const dinnerColor = '#2196f3';

const formatDuration = (hours, minutes) => {

    const paddedMinutes = minutes.toString().padStart(2, '0');
    return `${hours}h${paddedMinutes}`;

};

export default function RecipeItem({ recipe, onPress }) {

    const iconName = categoryIcons[recipe.category].name;
    const IconComponent = categoryIcons[recipe.category].lib;

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.recipeItem,
                pressed && { backgroundColor: 'rgba(255, 255, 255, 0.7)' }
            ]}
        >
            <View style={styles.recipeIconColumn}>

                <IconComponent 
                    name={iconName}
                    size={24} 
                    color={recipe.category === 1 ? breakfastColor : recipe.category === 2 ? lunchColor : dinnerColor}
                />

                <Text style={styles.recipeDuration}>
                    {formatDuration(recipe.durationHours, recipe.durationMinutes)}
                </Text>

            </View>

            <View style={styles.recipeItemText}>

                <Text style={styles.recipeName} numberOfLines={1}>{recipe.name}</Text>

                <Text style={styles.recipeDescription} numberOfLines={1}>
                    {recipe.description}
                </Text>

            </View>
        </Pressable>
    );
}