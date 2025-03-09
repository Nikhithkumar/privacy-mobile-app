import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';

const incidentLocationArray=[
    {id:1, name:'Lost Location'},
    {id:2, name:'Blank Card'},
    {id:3, name:'Plastic Card'},
    {id:4, name:'Doc'},
    {id:5, name:'Incident Summary'},
    {id:6, name:'Identity'},
]

const StepProgress = ({totalSteps, steps,step}: any) => {

  const renderStepIndicator = () => {
    return (
      <View style={styles.indicatorContainer}>
        {Array.from({length: totalSteps}, (_, i) => {
          const stepNumber = i + 1;
          return (
            <View key={stepNumber} style={styles.stepContainer}>
              <View
                style={[
                  styles.stepIndicator,
                  stepNumber <= step && styles.activeStep,
                ]}>
                {stepNumber <= step && (
                  <View
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '100%',
                      backgroundColor: Colors.yellow,
                    }}
                  />
                )}
              </View>
              {stepNumber < totalSteps && (
                <View
                  style={[styles.line, stepNumber < step && styles.activeLine]}
                />
              )}
            </View>
          );
        })}
      </View>
    );
  };

  const renderStepIndicatorName = () => {
    return (
      <View
        style={styles.nameContainer}>
        {incidentLocationArray.map( (item,index) => {
          const stepNumber = index + 1;
          return (
            <Text
              key={stepNumber}
              style={[
                styles.text,
                stepNumber <= step && {color: Colors.yellow},
              ]}>
              {item.name}
            </Text>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderStepIndicator()}
      {renderStepIndicatorName()}      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 30,
  },
  nameContainer:{
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    gap: 8,
    marginHorizontal: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
  },
  text:{
    color: Colors.white,
    textAlign: 'center',
    width: 55,
    fontSize:12
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepIndicator: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: Colors.darkGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeStep: {
    backgroundColor: Colors.darkGray,
  },
  stepText: {
    color: '#E7E7E7',
    fontWeight: 'bold',
    fontSize: 16,
  },
  activeStepText: {
    color: 'white',
  },
  line: {
    width: 28,
    height: 4,
    backgroundColor: Colors.darkGray,
  },
  activeLine: {
    //backgroundColor: 'pink',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});

export default StepProgress;
