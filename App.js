import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableHighlight, ScrollView, Switch, Button, Text, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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
            <Page1></Page1>
      </SafeAreaView>
    </SafeAreaProvider>

  
  );
 
function Page1() {
    return (
     
      <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 10 }}>Recipeasy</Text>
          </View>

          <View>
            <TextInput styles={styles.InputBox} ></TextInput>
          </View>
          <View>
            <TextInput styles={styles.InputBox} ></TextInput>
          </View>
      </View>
        
      
    );
 }

  // function Page2() {
  //   return (
  //     <SafeAreaView>
  //       <Text>Page 2</Text>
  //     </SafeAreaView>
  //   );
  // }

  // function Page3() {
  //   return (
  //     <SafeAreaView>
  //       <Text>Page 3</Text>
  //     </SafeAreaView>
  //   );
  // }

} 




//  Page 1



//  Page 2 



//  Page 3




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#377f7e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseContainer: {
    flexdirection: 'column',
    height: '100%',
    with: '100%',

  },
  InputBox : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
