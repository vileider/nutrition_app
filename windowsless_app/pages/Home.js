import { Button, View, Text } from 'react-native';

import Header from '../components/Header';

const HomePage = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Header/>
        <Button
        title="Go to Food page"
        onPress={() => navigation.navigate('FoodPage')}
    />
      </View> 
    );
  };

  export default HomePage;