/**
 * @format
 */

import 'react-native-get-random-values';
import 'react-native-gesture-handler';

import { AppRegistry, LogBox } from 'react-native';
import App from '#app/app';
import { name as appName } from './app';

LogBox.ignoreLogs([
  `[Reanimated] Tried to modify key \`reduceMotion\` of an object which has been already passed to a worklet. See 
https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#tried-to-modify-key-of-an-object-which-has-been-converted-to-a-shareable 
for more details.`,
  'Sending `onAnimatedValueUpdate` with no listeners registered.',
]);

AppRegistry.registerComponent(appName, () => App);
