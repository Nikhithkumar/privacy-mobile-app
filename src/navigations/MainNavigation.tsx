import {
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {BlurView} from '@react-native-community/blur';
import HomeScreen from '../screens/home/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import HomeStackNavigator from '../screens/home/HomeStackNavigator';
import {Colors} from '../constants/Colors';

const Tab = createBottomTabNavigator();

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () =>
      setVisible(false),
    );
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () =>
      setVisible(true),
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  if (!visible) return null; 

  const icons: Record<string, string> = {
    Home: 'home',
    Notifications: 'bell',
    Scan: 'scan',
    Profile: 'user',
    Settings: 'settings',
  };

  return (
    <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          if (route.name === 'Scan') {
            return (
              <View key={route.key} style={styles.scanButtonWrapper}>
                {Platform.OS === 'ios' && (
                  <BlurView
                    style={styles.blurEffect}
                    blurType="light"
                    blurAmount={10}
                  />
                )}
                <TouchableOpacity
                  style={styles.scanButton}
                  onPress={() => navigation.navigate(route.name)}>
                  <LinearGradient
                    colors={['#222', '#000']}
                    style={styles.scanGradient}>
                    <Text style={styles.scanText}>Scan</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            );
          }

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={styles.tabItem}>
              <Icon
                name={icons[route.name]}
                size={24}
                color={isFocused ? Colors.yellow : Colors.white}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        <Tab.Screen name="Scan" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#222',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  scanButtonWrapper: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: 80, // Make the wrapper bigger for the glow effect
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blurEffect: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
  },
  scanButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
  },
  scanGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  scanText: {
    color: Colors.yellow,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
