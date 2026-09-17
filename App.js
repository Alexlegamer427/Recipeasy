import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableHighlight, ScrollView, Switch, Button, Text, TextInput,Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import RadioGroup from 'react-native-radio-buttons-group';




export default function App() {
   const options = [
        {
            id: '1',
            label: 'One',
            value: '1'
        },
        {
            id: '2',
            label: 'Two',
            value: '2'
        }
    ];

  return (

    
    <SafeAreaProvider>
      <SafeAreaView style={styles.baseContainer}>
          <View style={styles.centerBox}>
               {/* <Page1></Page1>  */}
               {/* <Page2></Page2>  */}
              <Page3></Page3>

          </View>
      </SafeAreaView>
    </SafeAreaProvider>

  
  );
 
function Page1() {
    return (
     
      <View>

          <TextInput  style={[styles.inputBox]} placeholderTextColor='#FFFFFF' placeholder="Username" />
          
          <TextInput style={[styles.inputBox]} placeholderTextColor='#FFFFFF'  placeholder="Password" />
          
          <TouchableHighlight style={styles.login} onPress={() => console.log('sign in')} underlayColor="#f57f17">
                <Text style={styles.buttonText}>Log in</Text>
          </TouchableHighlight>

          <Pressable onPress={() => console.log('lien cliqué')}>
            <Text style={styles.link}>Sign up!</Text>
          </Pressable>

      </View>


    );
 }
} 

function Page2() {
  return (
    <View>
          <TextInput  style={[styles.inputBox]} placeholderTextColor='#FFFFFF' placeholder="Username" />
          
          <TextInput style={[styles.inputBox]} placeholderTextColor='#FFFFFF'  placeholder="Password" />

          <TextInput style={[styles.inputBox]} placeholderTextColor='#FFFFFF'  placeholder="Password Confirmation" />

          
          <TouchableHighlight style={styles.createAccountButton} onPress={() => console.log('sign in')} underlayColor="#cc6600">
                <Text style={styles.buttonText}>Sign in</Text>
          </TouchableHighlight>
    </View>
  );
}

function Page3() {
    const [selectedId, setSelectedId] = useState();
     const radioButtons = [
        {
            id: '1',
            label: 'Breakfast',
            value: 'breakfast', 
            color: '#FFFFFF', 
            borderColor: '#FFFFFF'
        },
        {
            id: '2',
            label: 'Lunch',
            value: 'lunch', 
            color: '#FFFFFF', 
            borderColor: '#FFFFFF'
        },
        {
            id: '3',
            label: 'Dinner',
            value: 'dinner', 
            color: '#FFFFFF', 
            borderColor: '#FFFFFF'
        }
    ];


  return (
    <View>
      <View style={[styles.rowContainer]}>
            <RadioGroup  
                radioButtons={radioButtons} 
                onPress={setSelectedId}
                selectedId={selectedId}
                layout='row'
                labelStyle={{ color: '#FFFFFF' }}
            />
      </View>

      <View>
        <TextInput></TextInput>
      </View>

      <View>
        <Picker>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
        </Picker>

        <Picker>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
        </Picker>

      </View>

      <View>

      </View>

     
      <Button title='ell' ></Button>
      

    </View>
  );
}



const styles = StyleSheet.create({
  baseContainer: {
    flexdirection: 'column',
    height: '100%',
    witdh: '100%',
    backgroundColor: '#377f7e',

  },
  inputBox : {
    width: 225,
    maxWidth: '100%',
    height: 45,
    alignSelf: 'center',
    textAlign: 'left',
    borderWidth: 0.7,
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
    borderRadius: 2,
    marginVertical: 20, 
    paddingHorizontal: 10,
   

  },
  centerBox : {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    
  },
  login : {
    backgroundColor: '#ff8000',
    marginVertical: 20, 
    paddingHorizontal: 5,
    width: '30%',
    height: 45,
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
   
  },
  createAccountButton : {
    backgroundColor: '#ff8000',
    marginVertical: 20, 
    paddingHorizontal: 5,
    width: '70%',
    height: 45,
    borderRadius: 10,
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  buttonText : {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  rowContainer : {
     flexDirection: 'row', 
     alignItems: 'center', 
     justifyContent: 'center',

  },
  link: {
    color: '#5e03b9',
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginVertical: 20, 
    paddingHorizontal: 20,
  },


});
