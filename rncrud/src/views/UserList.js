import React, { useContext } from 'react';
import { View, FlatList, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ListItem, Avatar, Button } from 'react-native-elements';
//import users from '../data/users';
import UsersContext from '../context/UsersContext';



const confirmUserDeletion = (user, dispatch) => {
    Alert.alert('Excluir Usuario', 'Deseja Excluir o Usuario ?', [
        {
            text: 'Sim',
            onPress() {
                dispatch({
                    type: 'deleteUser',
                    payload: user,
                })
            }

        },
        {
            text: 'Não'
        },
    ])
};

const getActions = (user, userAction, props, dispatch) => {
    if(userAction === "edit") {
        return props.navigation.navigate("UserForm", user)
    }

    if(userAction === "delete") {
        return confirmUserDeletion(user, dispatch);
    }
}

const UserList = (props) => {
    //console.warn(Object.keys(props))
  const { state, dispatch } = useContext(UsersContext);
    
  
  function getUserItem({ item: user }) {
    return (
        <ListItem bottomDivider key={user.id} /**onPress={() => props.navigation.navigate("UserForm")} */>
            <Avatar source={{uri: user.avatarUrl}}  />

            <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon name="lead-pencil" size={25} color="blue" onPress={() => getActions(user, "edit", props)}  />
            <Icon name="delete" size={25} color="red"  onPress={() => getActions(user, "delete", props, dispatch)} />
            

        </ListItem>
        
    )
  }
  
  return (
    <View>
        <FlatList   
            data={state.users}
            keyExtractor={(user) => String(user.id)}
            renderItem={getUserItem}
        />
    </View>
  )
}

export default UserList;