import {NavigationContainer} from '@react-navigation/native';
import  { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import About from './About';

const Stack = createStackNavigator();

export default function App({navigation}){
    return (
        <NavigationContainer>
            <Stack.Navigator>

            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}