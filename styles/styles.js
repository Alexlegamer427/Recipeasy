import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  baseContainer: {
    flexdirection: 'column',
    height: '100%',
    witdh: '100%',
   
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
  nameInputBox : {
    width: '100%',
    maxWidth: 300,
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
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#377f7e',
    
  },
  login : {
    backgroundColor: '#ff8000',
    marginVertical: 20, 
    paddingHorizontal: 5,
    width: 80,
    maxWidth: '30%',
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
    maxWidth: '70%',
    width:225,
    height: 45,
    borderRadius: 10,
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  save : {
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
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 3,
   
  },
  picker: {
      width: 95,
      maxWidth: '100%',  
      backgroundColor: 'transparent',
      bordorColor: 'transparent',
      color: '#FFFFFF',
      
  },
   regulartext: {
     color: '#FFFFFF',
     fontSize: 14,
     marginRight: 10,
      
  },
  recipeContainer: {
     
    width: '100%',
    maxWidth: 300,
    height: '100%',      
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
 
  },
  descriptionInput: {
    flex: 1,                   
    width: '100%',
    borderWidth: 0.7,
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
    borderRadius: 2,
    padding: 10,
    textAlignVertical: 'top',  
},
listContent: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',   
    alignItems: 'center',
    alignSelf: 'center',       
},
bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
},
roundButton: {
  backgroundColor:'#ff8000',
  width:60,
  height:60,
  borderRadius:50,
  maxWidth:'25%',
  textAlign: 'center',
  justifyContent: 'center',   
  alignItems: 'center',
  alignSelf: 'center',   
},

});
