import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home ({ navigation }) {
  return(
    <>
      <SafeAreaView/>
      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        <Text>Home</Text>

        <TouchableOpacity 
          style={{
            width: '90%',
            height: 50,
            backgroundColor: '#ddd',
            borderRadius: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={ () => navigation.navigate('Profile') } 
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
            }}
          >Move to Profile</Text>
        </TouchableOpacity>

      </View>
    </>
  )
}
function Profile ({ navigation }) {
  return(
    <>
      <SafeAreaView/>
      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        <Text>Profile</Text>

        <TouchableOpacity 
          style={{
            width: '90%',
            height: 50,
            backgroundColor: '#ddd',
            borderRadius: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={ () => navigation.navigate('Home') } 
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
            }}
          >Move to Home</Text>
        </TouchableOpacity>

      </View>
    </>
  )
}
