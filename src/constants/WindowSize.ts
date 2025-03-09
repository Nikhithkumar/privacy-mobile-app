import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const fontScale = Dimensions.get('window').fontScale;

const WindowSize = {
  windowWidth,
  windowHeight,
  fontScale,
};

export {windowWidth, windowHeight, WindowSize, fontScale};
