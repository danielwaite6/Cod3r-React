import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

// import { Container } from './styles';

const UserForm = ({ route, navigation }) => {
  //console.warn(Object.keys(route))

  //console.warn(route.params)

  const [user, setUser] = useState(route.params ? route.params : {});



  return (
     
    
      <View style={style.form}>
          <Text>Nome</Text>
          <TextInput style={style.input}
            onChangeText={(name) => setUser({...user, name})}
            placeholder="Informe o Nome"
            value={user.name}
          />
      

      
          <Text>Email</Text>
          <TextInput style={style.input}
            onChangeText={(email) => setUser({...user, email})}
            placeholder="Informe o Email"
            value={user.email}
          />

          <Text>Url do Avatar</Text>
          <TextInput style={style.input}
            onChangeText={(avatarUrl) => setUser({...user, avatarUrl})}
            placeholder="Informe o AvatarUrl"
            value={user.avatarUrl}
          />

          <Button
            title="Salvar Formulario"
            onPress={() => {
              navigation.goBack();
            }}
          />


      </View>
 

    
  )
}

export default UserForm;

const style = StyleSheet.create({
  form: {
    padding: 12
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  }

})