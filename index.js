import { AppRegistry } from 'react-native';
import { LoginPage } from './src/modules/authentication/login.page';
import { config } from './src/config';

config();

AppRegistry.registerComponent('TaqOnboardReactNative', () => LoginPage);
