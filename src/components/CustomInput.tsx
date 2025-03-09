import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  FlatList,
  ScrollView,
} from 'react-native';
import {Colors} from '../constants/Colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface CustomInputProps {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder: string;
  leftIcon?: {
    name: string;
    type:
      | 'SimpleLineIcons'
      | 'Feather'
      | 'MaterialIcons'
      | 'MaterialCommunityIcons';
  };
  rightIcon?: {
    name: string;
    type:
      | 'SimpleLineIcons'
      | 'Feather'
      | 'MaterialIcons'
      | 'MaterialCommunityIcons';
  };
  keyboardType?: KeyboardTypeOptions;
  error?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  numberOfLines?: number;
  inputContainerStyle?: ViewStyle;
  textInputStyle?: TextStyle;
  multiline?: boolean;
  rightIconText?: string;
  rightIconColor?: string;
  leftIconColor?: string;
  dropdownOptions?: string[];
  onEdit?: () => void;
  editable?: boolean;
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
    default:
      return Feather;
  }
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  leftIcon,
  rightIcon,
  keyboardType = 'default',
  onPress,
  error,
  containerStyle,
  numberOfLines,
  inputContainerStyle,
  textInputStyle,
  multiline,
  rightIconText,
  rightIconColor = Colors.darkGray,
  leftIconColor = Colors.lightGrey,
  dropdownOptions,
  onEdit,
  editable = true,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const LeftIconComponent = leftIcon ? getIconComponent(leftIcon.type) : null;
  const RightIconComponent = rightIcon
    ? getIconComponent(rightIcon.type)
    : null;

  const handleDropdownSelect = (option: string) => {
    onChangeText?.(option);
    setDropdownOpen(false);
  };

  return (
    <View style={{...styles.container, ...containerStyle}}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        onPress={
          dropdownOptions ? () => setDropdownOpen(!isDropdownOpen) : onPress
        }
        disabled={!onPress && !dropdownOptions}>
        <View style={{...styles.inputContainer, ...inputContainerStyle}}>
          {LeftIconComponent && leftIcon && (
            <LeftIconComponent
              name={leftIcon.name}
              color={leftIconColor}
              size={20}
            />
          )}
          <TextInput
            placeholder={placeholder}
            style={{...styles.textInput, ...textInputStyle}}
            placeholderTextColor={Colors.lightGrey}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            editable={!onPress && !dropdownOptions && editable}
            numberOfLines={numberOfLines}
            textAlignVertical="top"
            multiline={multiline}
          />
          {RightIconComponent && rightIcon && (
            <TouchableOpacity onPress={onEdit}>
              <RightIconComponent
                name={rightIcon.name}
                color={rightIconColor}
                size={20}
              />
            </TouchableOpacity>
          )}
          {rightIconText && !editable && (
            <Text style={styles.rightIconText}>{rightIconText}</Text>
          )}
        </View>
      </TouchableOpacity>
      {error && !value && <Text style={{color: 'red'}}>{error}</Text>}

      {isDropdownOpen && dropdownOptions && (
        <View style={styles.dropdownContainer}>
          <ScrollView keyboardShouldPersistTaps="handled">
            {dropdownOptions.map((item, index) => (
              <TouchableOpacity
                key={index} // Use a unique key if available
                style={styles.dropdownItem}
                onPress={() => handleDropdownSelect(item)}>
                <Text style={styles.dropdownText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.darkGray,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    fontSize: 16,
    color: Colors.white,
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: Colors.yellow,
    fontWeight: '300',
    marginBottom: 4,
  },
  rightIconText: {
    color: Colors.yellow,
    fontSize: 14,
    marginLeft: 2,
  },
  dropdownContainer: {
    marginTop: 80,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.lightGrey,
    maxHeight: 150,
    position: 'absolute',
    backgroundColor: Colors.darkBlack,
    zIndex: 999,
    width: '100%',
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.lightGrey,
  },
  dropdownText: {
    color: Colors.white,
    fontSize: 16,
  },
});
