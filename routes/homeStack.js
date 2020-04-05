import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import MainPage from '../screens/home';
import MainPage from '../src/screens/tabScreen'
import Login from '../screens/login';
import Registor from '../screens/registor';
import AuthLoading from '../screens/authLoading';
import ReviewScreen from '../screens/reviewScreen';

const AuthStack = createStackNavigator(
{
    SignIn : {
        screen : Login,
        navigationOptions : {
            title : 'SignIn Form',
        }
    },
    SignUp : {
        screen : Registor,
        navigationOptions : {
            title : 'SignUp Form',
        }
    }
},
{
    defaultNavigationOptions: { 
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:25,
          flex:1,
          textAlign:'center',
        },
        headerStyle :  {backgroundColor : '#5F9CD1' , height : 60}
    }
});

const HomeStack = createStackNavigator(
    {
        Home : {
            screen : MainPage,
            navigationOptions :{
                title : 'NewsApp'
            }
        },
        // ReviewScreen :{
        //     screen : ReviewScreen,
        //     navigationOptions :{
        //         title : 'ReviewScreen'
        //     }
        // }

    },
    {
        defaultNavigationOptions : {
            
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:25,
            flex:1,
            textAlign:'center',
            },
            headerStyle :  {backgroundColor : '#5F9CD1' , height : 60}
        }
    }
)
const App = createAppContainer(createSwitchNavigator(
    { 
        App : HomeStack,
        Auth : AuthStack,
        AuthLoading : AuthLoading  
    },
    {
        initialRouteName : 'AuthLoading'
    }
));
export default App;