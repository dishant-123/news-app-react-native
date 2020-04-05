import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    AsyncStorage,
    Image,
    
}  from 'react-native';

export default function ReviewApp({ navigation, name})
{
    return(
        <View style = {styles.container}>
            <Text>{name}</Text>
            {/* <Image source = {{uri : src}} style ={styles.image} /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 30,
    }
})