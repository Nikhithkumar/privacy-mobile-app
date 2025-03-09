import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../constants/Colors';
import CustomInput from '../CustomInput';
import GradientButton from '../GradientButton';
import GradientMenuButton from '../GradientMenuButton';
import {windowWidth} from '../../constants/WindowSize';

interface PlasticCardComponent {
  plasticCardData: any;
  setPlasticCardData: any;
  handleNext: () => void;
  handlePrevious?: () => void;
}

const PlasticCardComponent: React.FC<PlasticCardComponent> = ({
  plasticCardData,
  setPlasticCardData,
  handleNext,
  handlePrevious,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validatedform = () => {
    let newErrors: Record<string, string> = {};

    if (!plasticCardData?.cardType)
      newErrors.cardType = 'Card type is required';
    if (!plasticCardData?.cardNumber)
      newErrors.cardNumber = 'Card Number is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      handleNext();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Please provide the plastic card details you have lost
      </Text>
      <View style={styles.creditCardContainer}>
        <CustomInput
          label="Card Type"
          value={plasticCardData?.cardType}
          onChangeText={text =>
            setPlasticCardData((prev: any) => ({...prev, cardType: text}))
          }
          placeholder="Card Type"
          rightIcon={{name: 'chevron-down', type: 'Feather'}}
          containerStyle={{width: 120, flex: 0}}
          dropdownOptions={[
            'Visa',
            'MasterCard',
            'American Express',
            'Discover',
          ]}
          error={errors.cardType}
        />

        <CustomInput
          label="Card Number"
          value={plasticCardData?.cardNumber}
          onChangeText={text =>
            setPlasticCardData((prev: any) => ({...prev, cardNumber: text}))
          }
          placeholder="Card Number"
          keyboardType="number-pad"
          error={errors.cardNumber}
        />
      </View>
      <View style={styles.addContainer}>
        <Text style={{fontSize: 14, color: Colors.lightGrey}}>Add another</Text>
        <GradientButton iconName={'plus'} onPress={() => {}} />
      </View>
      <View style={styles.button}>
        <GradientMenuButton
          title="Next"
          onPress={validatedform}
          textStyle={{textAlign: 'center'}}
        />
      </View>
    </View>
  );
};

export default PlasticCardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  text: {
    color: Colors.lightGrey,
    textAlign: 'center',
    fontSize: 14,
  },
  addContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    gap: 10,
  },
  creditCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginVertical: 20,
    marginHorizontal: 2,
  },
  button: {
    width: windowWidth * 0.8,
    bottom: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
});
