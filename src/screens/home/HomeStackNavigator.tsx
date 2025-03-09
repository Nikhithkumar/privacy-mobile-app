import { StyleSheet } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen';
import LostReportScreen from './LostReportScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReportCardScreen from './ReportCardScreen';

export type HomeStackParamList = {
  HomeScreen: undefined;
  LostReportScreen: undefined;
  ReportCardScreen: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();;


const HomeStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LostReportScreen" component={LostReportScreen} />
        <Stack.Screen name="ReportCardScreen" component={ReportCardScreen} />
      </Stack.Navigator>
    );
  };

export default HomeStackNavigator

const styles = StyleSheet.create({})