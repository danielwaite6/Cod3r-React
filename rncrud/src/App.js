import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Button, Icon } from 'react-native-elements'

import UserForm from './views/UserForm'
import UserList from './views/UserList'
import { UsersProvider } from './context/UsersContext';

const Stack = createStackNavigator();

const App = () => {
  return (

    <UsersProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
                <Stack.Screen name="UserList" component={UserList} options={({navigation})=>({
                    title: "Lista  de Usuários",
                    headerRight: () => (
                        <Button onPress={()=> navigation.navigate("UserForm")}
                            type="clear"
                            icon={<Icon name="add" size={25} color="#FFF" />}
                        />
                    )
                })}  />
                <Stack.Screen name="UserForm" component={UserForm} options={{title: 'Formulário de Usuários'}}   />
            </Stack.Navigator>
        </NavigationContainer>
    </UsersProvider>
  )
};


const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}

export default App;