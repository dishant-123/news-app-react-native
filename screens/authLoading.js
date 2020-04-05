import React,{Component} from 'react';
import {
    View,
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
} from 'react-native';
import Axios from 'axios';

export default class AuthLoading extends Component{
    constructor(props) {
        super(props)
        this.checkUserAuth()
    }
    async checkUserAuth()
    {
        const token = await AsyncStorage.getItem('token');
        let user ={email:token};
        const response = await Axios.post('http://192.168.43.112:3000/checkAuth',user);
        console.log(response)
        if(response.data.user){
            this.props.navigation.navigate( 'App');
        }
        else{
            this.props.navigation.navigate( 'Auth');
        }
            // this.props.navigation.navigate(!token ? 'Auth':'App');
        
        
    }
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar />
            </View>
        )
    }
}

