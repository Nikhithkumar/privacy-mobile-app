import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomInput from '../CustomInput';
import {Colors} from '../../constants/Colors';
import {FormData} from '../../screens/home/ReportCardScreen';
import GradientMenuButton from '../GradientMenuButton';

interface LostCardComponentProps {
  lostLocationFormData: FormData;
  setLostLocationFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleNext?: () => void;
}

const LostCardComponent: React.FC<LostCardComponentProps> = ({
  lostLocationFormData,
  setLostLocationFormData,
  handleNext,
}) => {
  const navigation = useNavigation();
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validate the form
  const validateForm = () => {
    let newErrors: Record<string, string> = {};

    if (!date) newErrors.date = 'Date is required';
    if (!time) newErrors.time = 'Time is required';
    if (!lostLocationFormData.street.trim())
      newErrors.street = 'Street is required';
    if (!lostLocationFormData.city.trim()) newErrors.city = 'City is required';
    if (!lostLocationFormData.state.trim())
      newErrors.state = 'State is required';
    if (!lostLocationFormData.zipCode.trim())
      newErrors.zipCode = 'Zipcode is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0 && handleNext) {
      console.log('kjdflkjdfkjfd');
      handleNext();
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text style={styles.title}>
        Please enter the location where you lost your wallet
      </Text>

      <View style={styles.dateTimeContainer}>
        <CustomInput
          label="Date"
          value={date ? date.toDateString() : ''}
          placeholder="Select Date"
          leftIcon={{name: 'calendar', type: 'SimpleLineIcons'}}
          rightIcon={{name: 'chevron-down', type: 'Feather'}}
          onPress={() => setShowDatePicker(true)}
          error={errors.date}
        />
        <CustomInput
          label="Time"
          value={
            time
              ? time.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : ''
          }
          placeholder="Select Time"
          leftIcon={{name: 'access-time', type: 'MaterialIcons'}}
          rightIcon={{name: 'chevron-down', type: 'Feather'}}
          onPress={() => setShowTimePicker(true)}
          error={errors.time}
        />
      </View>

      <View style={styles.dateTimeContainer}>
        <CustomInput
          label="Street"
          value={lostLocationFormData.street}
          onChangeText={text =>
            setLostLocationFormData(prev => ({...prev, street: text}))
          }
          placeholder="Street"
          error={errors.street}
        />
        <CustomInput
          label="City"
          value={lostLocationFormData.city}
          onChangeText={text =>
            setLostLocationFormData(prev => ({...prev, city: text}))
          }
          placeholder="City"
          error={errors.city}
        />
      </View>

      <View style={styles.dateTimeContainer}>
        <CustomInput
          label="State"
          value={lostLocationFormData.state}
          onChangeText={text =>
            setLostLocationFormData(prev => ({...prev, state: text}))
          }
          placeholder="State"
          error={errors.state}
        />
        <CustomInput
          label="Zipcode"
          value={lostLocationFormData.zipCode}
          onChangeText={text =>
            setLostLocationFormData(prev => ({...prev, zipCode: text}))
          }
          placeholder="Zipcode"
          keyboardType="number-pad"
          error={errors.zipCode}
        />
      </View>

      <CustomInput
        label="Address line 1"
        value={lostLocationFormData.address1}
        onChangeText={text =>
          setLostLocationFormData(prev => ({...prev, address1: text}))
        }
        placeholder="Address line 1"
      />
      <CustomInput
        label="Address line 2"
        value={lostLocationFormData.address2}
        onChangeText={text =>
          setLostLocationFormData(prev => ({...prev, address2: text}))
        }
        placeholder="Address line 2"
        containerStyle={{marginTop: 10}}
      />

      <View style={{marginTop: 20}}>
        <GradientMenuButton
          title="Next"
          onPress={validateForm}
          textStyle={{textAlign: 'center'}}
        />
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      {showTimePicker && (
        <DateTimePicker
          value={time || new Date()}
          mode="time"
          display="default"
          onChange={(event, selectedTime) => {
            setShowTimePicker(false);
            if (selectedTime) setTime(selectedTime);
          }}
        />
      )}
    </View>
  );
};

export default LostCardComponent;

const styles = StyleSheet.create({
  title: {
    color: Colors.lightWhite,
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    marginVertical: 10,
  },
  submitButton: {
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
