import React,{useState} from 'react';
import {AppLoading} from 'expo';
import axios from 'axios';

import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    StatusBar,
    FlatList,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    AsyncStorage
}  from 'react-native';

export default function Home({navigation})
{
        const [content, setContent] = useState([]);
        const [dataFetched, setDataFetched] = useState(false);
        const [location, setLocation] = useState("london");
        const fetchData =async ()=>{
            const data  = await axios.get("https://api.unsplash.com/search/photos?query="+location+"&client_id=owQ_2iDiQ6WmM56DlcjbLIILg2FT132PaDghBW9tETI");
            setContent(data.data.results);
            // console.log(data.data.results.item[0].alt_description);
        
        }
        if(dataFetched)
        {
         

            return (
                <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                    <View style = {styles.container}>  
                        <TextInput style = {styles.textInput}  placeholder = "eg. london"  onChangeText = {(val) =>setLocation(val)}/>
                        <Button title = "Search" onPress = {fetchData} color='#2980b9'/>
                        <FlatList
                            data ={content}
                            keyExtractor ={(item)=>item.id}
                            renderItem = {({item}) =>
                                (
                                    <View style ={styles.container}>
                                        <TouchableOpacity  >
                                            <Image source = {{uri:item.urls.small}} style ={styles.image} />
                                        </TouchableOpacity>
                                        <Text style ={styles.title}>{item.alt_description}</Text>
                                    </View>
                                )
                            }
                        />
                    </View>
                </TouchableWithoutFeedback>
            )
        }
        else
        {   
            return (
                <View style = {styles.container}>
                    <ActivityIndicator />
                    <StatusBar />
                    <AppLoading startAsync = {fetchData} onFinish = {()=>setDataFetched(true)} />
                </View>
            )
        }

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 15,
        justifyContent:'center',
        alignItems :'center'
    },
    textInput : {
        padding : 10,
        margin : 10,
        width : 280,
        borderRadius : 10,
        borderColor:'gray',
        backgroundColor :"#fff",
        borderBottomWidth : 1,
        color : "#333"
    },
    image : {
        height:200,
        width:300,
        marginBottom:7
    },
    title : {
        fontSize :15,
        fontWeight : 'bold',
        color : 'gray'
    }
})