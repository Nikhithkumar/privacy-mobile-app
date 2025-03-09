import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  TextStyle,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../constants/Colors';
import GradientButton from './GradientButton';

interface GradientMenuButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  leftIconName?:  {
    name: string;
    type: 'SimpleLineIcons' | 'Feather' | 'MaterialIcons'|'MaterialCommunityIcons'|'FontAwesome5';
  };
  rightIconName?: string;
  textStyle?: TextStyle;
  buttonContainerStyle?: ViewStyle;
  showButton?: boolean;
  containerStyle?: ViewStyle;
}

const getIconComponent = (type: string) => {
  switch (type) {
    case 'SimpleLineIcons':
      return SimpleLineIcons;
    case 'Feather':
      return Feather;
    case 'MaterialIcons':
      return MaterialIcons;
    case 'MaterialCommunityIcons':
      return MaterialCommunityIcons;
    case 'FontAwesome5':
      return FontAwesome5;
    default:
      return Feather;
  }
};

const GradientMenuButton: React.FC<GradientMenuButtonProps> = ({
  title,
  onPress,
  leftIconName,
  rightIconName = 'chevron-right',
  textStyle,
  buttonContainerStyle,
  showButton = true,
  containerStyle,
}) => {
  const LeftIconComponent = leftIconName ? getIconComponent(leftIconName.type) : null;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{...styles.shadow, ...buttonContainerStyle}}>
      <LinearGradient
        colors={['#22252A', '#17181B']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{...styles.container, ...containerStyle}}>
        {LeftIconComponent && leftIconName && (
            <LeftIconComponent
              name={leftIconName?.name}
              color={Colors.yellow}
              size={20}
              style={styles.leftIcon}
            />
          )}
        <Text style={{...styles.text, ...textStyle}}>{title}</Text>
        {showButton && (
          <GradientButton iconName={rightIconName} onPress={onPress} />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: Colors.darkBlack,
  },
  leftIcon: {
    marginRight: 12,
  },
  text: {
    color: '#FFD700', // Gold color
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
  },
  rightIconWrapper: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GradientMenuButton;
