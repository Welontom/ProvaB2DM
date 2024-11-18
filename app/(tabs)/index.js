import { createClient } from '@supabase/supabase-js';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';


const SUPABASE_URL = ''
const SUPABASE_ANON_KEY = '';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}