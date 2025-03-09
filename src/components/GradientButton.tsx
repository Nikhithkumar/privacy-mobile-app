import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {Colors} from '../constants/Colors';
import {BlurView} from '@react-native-community/blur';

interface GradientButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  iconName: string;
  iconSize?: number;
  colors?: string[];
}

const GradientButton: React.FC<GradientButtonProps> = ({
  onPress,
  iconName,
  iconSize = 14,
  colors = ['#3A3B3C', '#000000'],
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.buttonContainer}>
      <LinearGradient
        colors={colors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradientContainer}>
        <View style={styles.innerCircle}>
          <Icon name={iconName} size={iconSize} color={Colors.yellow}/>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    borderRadius: 50,
    // overflow: 'hidden',
    padding: 5,
  },
  buttonContainer: {
    backgroundColor: 'rgba(58, 59, 60, 0.3)', // Semi-transparent background
    borderRadius: 50,
    padding: 2,
  },
  gradientContainer: {
    width: 35,
    height: 35,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    borderWidth: 2,
    borderColor: '#1C1E21',
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderRadius: 100,
    backgroundColor: '#1C1E21',
  },
});

export default GradientButton;
