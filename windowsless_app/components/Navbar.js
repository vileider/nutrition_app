import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="About" component={AboutPage} />
    </Stack.Navigator>
  );
}

export default Navbar;





// import { Button, View, Text } from 'react-native';
// // import AboutPage from './About';
// // import HomePage from './Home';

// const Navbar = ({navigation}) => {
//     <View>
//         <Button title="Home"
//         onPress={() => navigation.navigate('Home')}/>
//         <Button title="About"
//         onPress={() => navigation.navigate('About')}/>
//         <Stack.Screen name="Home" component={HomePage} />
//         <Stack.Screen name="About" component={AboutPage} />
//     </View>
// }

// export default Navbar;