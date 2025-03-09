import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import GradientButton from './GradientButton';
import { Colors } from '../constants/Colors';

interface HeaderProps {
  title: string;
  onBackPress: () => void;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

const Header: React.FC<HeaderProps> = ({ title, onBackPress, containerStyle, titleStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <GradientButton iconName="chevron-left" onPress={onBackPress} />
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: Colors.yellow,
    fontWeight: '800',
    textAlign: 'center',
    flex: 1,
  },
});

export default Header;
