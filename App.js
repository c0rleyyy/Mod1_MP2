import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App(){
  return (
    <View style={styles.inputContainer}>
      <View>       
        <TextInput 
          placeholder="Username here..." 
          style={{     
            borderColor:'black', borderWidth: 1,
            padding:10
          }}
        />
        <Button 
          title="Login"      

        />
      </View> 
      <View>       
      </View>
    </View>
  );
}
 


const styles = StyleSheet.create({
  root:
  {
    padding: 50

  },
  inputContainer:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
});

