import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from "./screens/HomeScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            title: "QuickNotes",
            headerStyle: {
              backgroundColor: '#FAEED1', // bg color
            },
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          leftButton={null}
          options={{
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
