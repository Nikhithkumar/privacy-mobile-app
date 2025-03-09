import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientBackgroundProps {
  children: ReactNode;
  colors?: string[];
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  colors = ['#373A3F', '#1C1E21', '#1C1E21', '#1C1E21', '#373A3F'],
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
      <View style={styles.content}>{children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20, 
  },
});

export default GradientBackground;
