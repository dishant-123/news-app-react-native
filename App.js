import React,{useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import TabScreen from './src/screens/tabScreen'
import Navigator from './routes/homeStack'
const getFonts = ()=> Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    
})
export default function App()
{
    const [fontLoaded, setFontloaded] = useState(false);

    if(fontLoaded){
        return (
            <Navigator />
            // <TabScreen/>
        )
    }
    else{
        return (
            <AppLoading startAsync = {getFonts} onFinish = {()=>setFontloaded(true)} />
        )
    }

}

