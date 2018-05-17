import { AppRegistry } from 'react-native';
import App from './src/App';
import { config } from './src/config';

config();

AppRegistry.registerComponent('TaqOnboardReactNative', () => App);
