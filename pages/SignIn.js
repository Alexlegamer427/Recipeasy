import { View, TouchableHighlight, Text, TextInput,Pressable } from 'react-native';
import {styles} from '../styles/styles.js'

export default function SignIn({navigation}) {

  const TextColor = '#FFFFFF';
  return (
    <View style={styles.centerBox}>

        <TextInput  style={[styles.inputBox]} placeholderTextColor={TextColor} placeholder="Username" />
        
        <TextInput style={[styles.inputBox]} placeholderTextColor={TextColor}  placeholder="Password" />
        
        <TouchableHighlight style={styles.login} onPress={() => navigation.navigate('ListRecipee')} underlayColor="#f57f17">
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableHighlight>

        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.link}>Sign up!</Text>
        </Pressable>

    </View>
  );
}
