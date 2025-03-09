import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../constants/Colors';
import GradientButton from '../GradientButton';
import CustomInput from '../CustomInput';
import GradientMenuButton from '../GradientMenuButton';
import {windowWidth} from '../../constants/WindowSize';

interface DocumentCardComponentProps {
  handleNext: () => void;
  handlePrevious?: () => void;
  documnentData: any;
  setdocumnentData: any;
}

const DocumentCardComponent: React.FC<DocumentCardComponentProps> = ({
  handleNext,
  handlePrevious,
  documnentData,
  setdocumnentData,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validatedform = () => {
    let newErrors: Record<string, string> = {};

    if (!documnentData?.docType)
      newErrors.docType = 'Document type is required';
    if (!documnentData?.desc) newErrors.desc = 'Description is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      handleNext();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Please describle the document you have lost
      </Text>
      <View style={{gap: 20, marginTop: 20}}>
        <CustomInput
          label="Document Type"
          value={documnentData?.docType}
          onChangeText={text =>
            setdocumnentData((prev: any) => ({...prev, docType: text}))
          }
          placeholder="Document Type"
          rightIcon={{name: 'chevron-down', type: 'Feather'}}
          dropdownOptions={['Andhar Card', 'Pan Card', 'Driving licenes']}
          error={errors.docType}
        />
        <CustomInput
          label="Description"
          value={documnentData?.desc}
          onChangeText={text =>
            setdocumnentData((prev: any) => ({...prev, desc: text}))
          }
          placeholder="Description"
          inputContainerStyle={{height: 100}}
          textInputStyle={{paddingTop: 0, paddingBottom: 0}}
          multiline={true}
          error={errors.desc}
        />
      </View>
      <View style={styles.addContainer}>
        <Text style={{fontSize: 14, color: Colors.lightGrey}}>Add another</Text>
        <GradientButton iconName={'plus'} onPress={() => {}} />
      </View>
      <View>
        <GradientMenuButton
          title="Next"
          onPress={validatedform}
          textStyle={{textAlign: 'center'}}
        />
      </View>
      <Text
        onPress={() => {}}
        style={styles.skipText}>
        Skip for now
      </Text>
    </View>
  );
};

export default DocumentCardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginVertical: 10,
  },
  skipText:{
    fontSize: 16,
    color: Colors.lightGrey,
    textAlign: 'center',
    marginTop: 20,
  }
});
