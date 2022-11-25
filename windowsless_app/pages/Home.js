import { Button, View, Text } from 'react-native';

import Header from '../components/Header';

const HomePage = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Header/>
        <Button
        title="Go to About page"
        onPress={() => navigation.navigate('AboutPage')}
      />
      </View>
    );
  };

  export default HomePage;