import {StyleSheet, View} from 'react-native';
import React from 'react';
import GradientBackground from '../../components/GradientBackground';
import Header from '../../components/Header';
import {Text} from 'react-native';
import {Colors} from '../../constants/Colors';
import {windowWidth} from '../../constants/WindowSize';
import GradientMenuButton from '../../components/GradientMenuButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from './HomeStackNavigator';

const HomeScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const handleScreen=()=>{
    navigation.navigate('Home', { screen: 'ReportCardScreen' } as any);

  }
  return (
    <GradientBackground>
      <Header
        title="Lost Wallet Remediation"
        onBackPress={() => console.log('Back Pressed!')}
        containerStyle={{marginTop: 10}}
        titleStyle={{fontSize: 20}}
      />
      <Text style={styles.text}>
        If you have lost your wallet, take instant steps from this section
      </Text>
      <View style={{marginTop:30,gap:20}}>
        <GradientMenuButton
          title="Instant Lost Report"
          leftIconName={{name: 'flag', type: 'Feather'}}
          onPress={handleScreen}
        />
         <GradientMenuButton
          title="Freeze Account(s)"
          leftIconName={{name: 'star-of-life', type: 'FontAwesome5'}}
          onPress={() => console.log('Button Pressed!')}
        />
         <GradientMenuButton
          title="Request Card(s) Replacement"
          leftIconName={{name: 'file-replace-outline', type: 'MaterialCommunityIcons'}}
          onPress={() => console.log('Button Pressed!')}
        />
         <GradientMenuButton
          title="Police Report Record"
          leftIconName={{name: 'person', type: 'MaterialIcons'}}
          onPress={() => console.log('Button Pressed!')}
        />
         <GradientMenuButton
          title="FAQ's"
          leftIconName={{name: 'file-document-multiple', type: 'MaterialCommunityIcons'}}
          onPress={() => console.log('Button Pressed!')}
        />
      </View>
    </GradientBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: Colors.lightGrey,
    textAlign: 'center',
    marginTop: 20,
    width: windowWidth * 0.85,
    alignSelf: 'center',
  },
});
