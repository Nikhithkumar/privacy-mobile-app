import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientBackground from '../../components/GradientBackground';
import Header from '../../components/Header';
import {Colors} from '../../constants/Colors';
import GradientMenuButton from '../../components/GradientMenuButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {windowWidth} from '../../constants/WindowSize';
import { useNavigation } from '@react-navigation/native';

const LostReportScreen = () => {
  const navigation=useNavigation()
  const handleNavigate=()=>{
    navigation.navigate('HomeScreen')
  }
  return (
    <GradientBackground>
      <Header
        title="Instant Lost Report"
        onBackPress={() => navigation.goBack()}
        containerStyle={{marginTop: 10}}
        titleStyle={{fontSize: 20}}
      />
      <View style={styles.container}>
        <Icon
          name={'file-document-multiple-outline'}
          size={50}
          color={Colors.yellow}
          style={{marginTop: 150}}
        />
        <Text style={{...styles.text, marginTop: 50, marginBottom: 20}}>
          Report Received
        </Text>
        <Text style={styles.text}>
          instant Lost report process completed successfully
        </Text>
        <Text style={styles.greytext}>Want to take further action</Text>
        <View style={{width:'100%'}}>
          <GradientMenuButton
            title="Continue"
            textStyle={{textAlign: 'center'}}
            onPress={handleNavigate}
          />
        </View>
      </View>
    </GradientBackground>
  );
};

export default LostReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.yellow,
    textAlign: 'center',
    width: windowWidth * 0.7,
    letterSpacing: 1,
  },
  greytext: {
    fontSize: 12,
    fontWeight: '300',
    color: Colors.lightGrey,
    textAlign: 'center',
    marginTop: 150,
    marginBottom: 20,
  },
});
