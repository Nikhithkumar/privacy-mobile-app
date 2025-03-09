import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../constants/Colors';
import {windowWidth} from '../../constants/WindowSize';
import CustomInput from '../CustomInput';
import GradientMenuButton from '../GradientMenuButton';
import {FormData} from '../../screens/home/ReportCardScreen';

interface IndentityCardComponentProps {
  handleNext: () => void;
  lostCardformData: any;
  setLostLocationFormData: React.Dispatch<React.SetStateAction<FormData>>;
  identityData: any;
  setIdentityData: any;
}

const IdentityCardComponent: React.FC<IndentityCardComponentProps> = ({
  handleNext,
  lostCardformData,
  setLostLocationFormData,
  identityData,
  setIdentityData,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isEditing, setIsEditing] = useState<{ name: boolean; phoneNo: boolean; emailAddress: boolean }>({
    name: false,
    phoneNo: false,
    emailAddress: false,
  });
  
  const handleEdit = (field: keyof typeof isEditing) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };
  

  // Validate the form
  const validateForm = () => {
    let newErrors: Record<string, string> = {};

    if (!identityData?.name) newErrors.name = 'Name is required';
    if (!identityData?.phoneNo) newErrors.phoneNo = 'Phone No is required';
    if (!identityData?.emailAddress)
      newErrors.emailAddress = 'Email Address is required';
    if (!lostCardformData.street.trim())
      newErrors.street = 'Street is required';
    if (!lostCardformData.city.trim()) newErrors.city = 'City is required';
    if (!lostCardformData.state.trim())
      newErrors.state = 'State is required';
    if (!lostCardformData.zipCode.trim())
      newErrors.zipCode = 'Zipcode is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0 && handleNext) {
      handleNext();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Please confirm your identity & physical contact address
      </Text>
      <View style={styles.identityContainer}>
        <View style={{alignItems: 'center', gap: 4}}>
          <Text style={{textAlign: 'center', color: Colors.white}}>
            Your identity
          </Text>
          <View style={styles.line} />
        </View>
        <CustomInput
          label="Name"
          value={identityData?.name}
          onChangeText={text =>
            setIdentityData((prev: any) => ({...prev, name: text}))
          }
          placeholder="Alex White"
          rightIconText={'Edit'}
          rightIcon={{name: 'edit', type: 'Feather'}}
          rightIconColor={Colors.yellow}
          error={errors.name}
          editable={isEditing.name} 
          onEdit={() => handleEdit("name")}
        />
        <CustomInput
          label="Phone Number"
          value={identityData?.phoneNo}
          onChangeText={text =>
            setIdentityData((prev: any) => ({...prev, phoneNo: text}))
          }
          placeholder="814238888"
          keyboardType="number-pad"
          rightIconText={'Edit'}
          rightIcon={{name: 'edit', type: 'Feather'}}
          rightIconColor={Colors.yellow}
          error={errors.phoneNo}
          editable={isEditing.phoneNo} 
          onEdit={() => handleEdit("phoneNo")}
        />
        <CustomInput
          label="Email Address"
          value={identityData?.emailAddress}
          onChangeText={text =>
            setIdentityData((prev: any) => ({...prev, emailAddress: text}))
          }
          placeholder="email@example.com"
          rightIconText={'Edit'}
          rightIcon={{name: 'edit', type: 'Feather'}}
          leftIcon={{name: 'email', type: 'MaterialCommunityIcons'}}
          leftIconColor={Colors.darkGray}
          rightIconColor={Colors.yellow}
          error={errors.emailAddress}
          editable={isEditing.emailAddress} 
          onEdit={() => handleEdit("emailAddress")}
        />
      </View>
      <View style={styles.identityContainer}>
        <View style={{alignItems: 'center', gap: 4}}>
          <Text style={{textAlign: 'center', color: Colors.white}}>
            Contact Address
          </Text>
          <View style={styles.line} />
        </View>
        <View>
          <View style={styles.dateTimeContainer}>
            <CustomInput
              label="Street"
              value={lostCardformData?.street}
              onChangeText={text =>
                setLostLocationFormData(prev => ({...prev, street: text}))
              }
              placeholder="Street"
              error={errors?.street}
            />
            <CustomInput
              label="City"
              value={lostCardformData?.city}
              onChangeText={text =>
                setLostLocationFormData(prev => ({...prev, city: text}))
              }
              placeholder="City"
              error={errors?.city}
            />
          </View>
          <View style={styles.dateTimeContainer}>
            <CustomInput
              label="State"
              value={lostCardformData?.state}
              onChangeText={text =>
                setLostLocationFormData(prev => ({...prev, state: text}))
              }
              placeholder="State"
              error={errors?.state}
            />
            <CustomInput
              label="Zipcode"
              value={lostCardformData?.zipCode}
              onChangeText={text =>
                setLostLocationFormData(prev => ({...prev, zipCode: text}))
              }
              placeholder="Zipcode"
              keyboardType="number-pad"
              error={errors?.zipCode}
            />
          </View>
          <CustomInput
            label="Address line 1"
            value={lostCardformData?.address1}
            onChangeText={text =>
              setLostLocationFormData(prev => ({...prev, address1: text}))
            }
            placeholder="Address line 1"
          />
          <CustomInput
            label="Address line 2"
            value={lostCardformData?.address2}
            onChangeText={text =>
              setLostLocationFormData(prev => ({...prev, address2: text}))
            }
            placeholder="Address line 2"
          />
        </View>
      </View>
      <View style={styles.button}>
        <GradientMenuButton
          title="Confirm"
          onPress={validateForm}
          textStyle={{textAlign: 'center'}}
        />
      </View>
    </View>
  );
};

export default IdentityCardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  line: {
    borderWidth: 1,
    width: windowWidth * 0.6,
    borderColor: Colors.yellow,
    alignItems: 'center',
  },
  text: {
    color: Colors.lightGrey,
    textAlign: 'center',
    fontSize: 14,
  },
  identityContainer: {
    backgroundColor: Colors.primaryBlack,
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 10,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  },
});
