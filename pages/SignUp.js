import { View, TouchableHighlight,Text, TextInput } from 'react-native';
import {styles} from '../styles/styles.js'


export default function SignUp({navigation}) {

const TextColor = '#FFFFFF';

return (
  <View style={styles.centerBox}>

        <TextInput  style={[styles.inputBox]} placeholderTextColor={TextColor} placeholder="Username" />
        
        <TextInput style={[styles.inputBox]} placeholderTextColor={TextColor}  placeholder="Password" />

        <TextInput style={[styles.inputBox]} placeholderTextColor={TextColor}  placeholder="Password Confirmation" />

        <TouchableHighlight style={styles.createAccountButton} onPress={() => navigation.navigate('ListRecipee') } underlayColor="#cc6600">
          <Text style={styles.buttonText}>Sign up</Text> 
        </TouchableHighlight>

  </View>
  );
}