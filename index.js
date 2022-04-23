/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FirstScreen from './NewProject/FirstScreen'

AppRegistry.registerComponent(appName, () => FirstScreen);
