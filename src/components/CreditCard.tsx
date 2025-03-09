import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {windowWidth} from '../constants/WindowSize';
import {Colors} from '../constants/Colors';

interface CreditCardProps {
  onPress: () => void;
  item:any
}

const CreditCard: React.FC<CreditCardProps> = ({onPress,item}) => {
  return (
    <TouchableOpacity key={item.id} onPress={onPress}>
      <LinearGradient
        colors={['#1C1E21', '#373A3F']}
        style={styles.cardContainer}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View style={styles.tapContainer}>
          <Text style={styles.tapText}>Tap to select</Text>
          <Image
            source={require('../assets/images/point.png')} 
            style={styles.tapIcon}
          />
        </View>

        <View style={styles.chipContainer}>
          <Image
            source={require('../assets/images/chip.png')}
            style={styles.chipIcon}
          />
          <Image
            source={require('../assets/images/wifi-signal.png')}
            style={[styles.singalIcon, {transform: [{rotate: '90deg'}]}]}
          />
        </View>

        <Text style={styles.cardNumber}>{item.creditCardNo}</Text>

        <Text style={styles.validThru}>{`VALID THRU ${item.validThru}`}</Text>

        <Text style={styles.cardHolder}>{item.name}</Text>

        <Image
          source={require('../assets/images/visa.png')}
          style={styles.visaLogo}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: windowWidth * 0.8,
    height: 220,
    borderRadius: 15,
    padding: 20,
    justifyContent: 'space-between',
    position: 'relative',
    marginVertical: 20,
  },
  tapContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tapText: {
    color: Colors.yellow,
    fontSize: 12,
    marginRight: 5,
  },
  tapIcon: {
    width: 15,
    height: 15,
  },
  chipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },
  chipIcon: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
    overflow: 'hidden',
    borderRadius: 5,
  },
  singalIcon: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 2,
    marginTop: 10,
  },
  validThru: {
    color: '#bbb',
    fontSize: 12,
    marginTop: 5,
  },
  cardHolder: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  visaLogo: {
    position: 'absolute',
    bottom: 15,
    right: 20,
    width: 80,
    height: 50,
    resizeMode: 'contain',
  },
});
