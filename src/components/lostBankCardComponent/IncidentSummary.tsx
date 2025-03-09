import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {Colors} from '../../constants/Colors';
import CustomInput from '../CustomInput';
import GradientMenuButton from '../GradientMenuButton';

interface IncidentSummaryProps {
  handleNext: () => void;
  summaryData: any;
  setSummaryData: any;
}

const IncidentSummary: React.FC<IncidentSummaryProps> = ({
  handleNext,
  summaryData,
  setSummaryData,
}) => {

    const [errors, setErrors] = useState<string>('');
  
    const validatedform = () => {
      let newErrors: string= '';
  
      if (!summaryData)
        newErrors = 'summary is required';

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
      <View style={{marginTop: 20}}>
        <CustomInput
          label="Summary of incident"
          value={summaryData}
          onChangeText={text => setSummaryData(text)}
          placeholder="Summary"
          inputContainerStyle={{
            height: 300,
            alignItems: 'flex-start',
            paddingVertical: 10,
          }}
          textInputStyle={{paddingTop: 0, paddingBottom: 0}}
          multiline={true}
          error={errors}
        />
      </View>
      <View style={styles.button}>
        <GradientMenuButton
          title="Confirm"
          onPress={validatedform}
          textStyle={{textAlign: 'center'}}
        />
      </View>
    </View>
  );
};

export default IncidentSummary;

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
  button: {
    marginTop: 20,
  },
});
