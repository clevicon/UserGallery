import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import UserDetails from "../screens/UserDetails";
// import AppContextProvider from '../context/AppContext';



const Navigator=() => {
    const Stack=createNativeStackNavigator();

    return (
      <NavigationContainer>
        {/* <AppContextProvider> */}
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
            <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
            <Stack.Screen name="UserDetails" component={UserDetails} options={{headerShown:false}}/>
          </Stack.Navigator>
        {/* </AppContextProvider> */}
      </NavigationContainer>
    );
}

export default Navigator;