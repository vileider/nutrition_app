import { Button, View, Text, TextInput } from 'react-native';
import {useEffect, useState} from 'react';
import React from 'react';

const FoodPage = () => {
  const [foods, setFoods] = useState("123")
  const [name, setName] = useState("tomato")
  const apiUrl = `https://api.edamam.com/api/nutrition-data?app_id=0fa1cc30&app_key=fa500a373a17b3793f30066f46c71a92%09&nutrition-type=logging&ingr=${name}`
useEffect( () => { 
  async function fetchData() {
      try {
          const res = await fetch(apiUrl,
                 {
                    method: 'GET',
                    headers: {
                       'Content-Type': 'application/json',
                    },
                 })
          const data = await res.json()
          setFoods(data.calories)
      } catch (err) {
          console.log(err);
      }
  }
  fetchData();
}, [name])
console.log(foods)
  return (
    <View>
      <TextInput
          
          onChangeText={ (text) => setName(text)}          
          value={name}
          
        />
        
        <Text >type of food: {name}</Text>
        <Text >Amount of calories{foods}</Text>
        </View>
    
  )
      };

  export default FoodPage;