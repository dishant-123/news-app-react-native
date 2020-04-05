import React,{useState} from 'react';
import {StyleSheet, Keyboard, TouchableWithoutFeedback, View, Text, TextInput, KeyboardAvoidingView,Button,TouchableOpacity, AsyncStorage} from 'react-native'
import axios from 'axios';
export default function Login({navigation})
{
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const checkAuth = async() => {
        const user = {
            userName : name,
            email : email,
            password : password
        }
        const response = await axios.post('http://192.168.43.112:3000/signUp',user);
        if(!response.data.user){
            setError(rsponse.data.message)
        }
        else{
            await AsyncStorage.setItem('token',response.data.user.email)
            navigation.navigate('Home')
        }
    }
    const handleSubmit =()=>{
        if(email.length == 0 || password.length == 0 || name.length == 0)
        {
            setError("All Fields are Required!")
        }
        else if(password.length <8){
            setError("Password must be Atlease 8 character!");
        }
        else{
            checkAuth();
        }
    }
    return (
        <TouchableWithoutFeedback onPress  ={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior = "padding" style ={styles.container}>
                <View>
                    
                    <Text style  ={styles.alert}>{error}</Text>
                    <Text style = {styles.text}>Enter Name</Text>
                    
                    <TextInput style = {styles.textInput} placeholder = "eg. dishant" autoCapitalize ="none" multiline onChangeText = {(val) =>setName(val)}/>
                    <Text style = {styles.text}>Enter Email</Text>
                    <TextInput  style = {styles.textInput} placeholder = "eg. dishant@gmail.com" multiline keyboardType='email-address' onChangeText = {(val) =>setEmail(val)}/>
                    <Text style = {styles.text}>Enter Password</Text>
                    <TextInput style = {styles.textInput} secureTextEntry placeholder = "eg. password@def45#$"  onChangeText = {(val) =>setPassword(val)}/>
                    <TouchableOpacity >
                        <View style  ={styles.buttonContainer}>
                            <Button  title ='SignUp'  onPress  ={handleSubmit} />
                        </View>
                        
                    </TouchableOpacity>
                    <View style = {styles.bottomText}>
                        <Text >Already Have An Account <Text style = {styles.signUpColor} onPress = {()=>navigation.navigate('SignIn')}>SignIn ?</Text></Text>
                    </View>
                
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback >
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#5F9CD1',
        padding : 30,
        justifyContent:'center',
        alignItems : 'center',
    },
    textInput : {
        padding : 10,
        margin : 10,
        width : 280,
        borderRadius : 10,
        borderColor:'#fff',
        backgroundColor :"#fff",
        borderWidth : 1,
        color : "#333"
    },
    buttonContainer:{
        marginTop : 15,
        backgroundColor:'#2980b9',
    },
    alert :{
        fontWeight :'bold',
        fontSize : 13,
        color : 'red',
        marginLeft : 20,
        marginBottom:6,
    },
    signUpColor : {
        fontSize : 15,
        color:'white',
    },
    text : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 15,
        marginHorizontal : 10
    },
    header : {
        fontWeight : 'bold',
        fontSize:25,
        marginBottom:30,
        color : 'white',
        marginHorizontal:50,
    },
    bottomText : {
        marginTop : 30,
        alignItems:'center',
        justifyContent : 'center',
    }
})

