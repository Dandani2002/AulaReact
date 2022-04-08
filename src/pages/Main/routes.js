import {NavigationContainer} from '@react-navigation/native';
import  { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import About from './About';
import Main from './Main';

const Stack = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>

            <Stack.Screen name ="Main" component={Main} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}