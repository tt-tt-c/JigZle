/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BasicStageScreen, StageListScreen, TopScreen} from './src/screens';

type RootStackKey = 'Top' | 'StageList' | 'BasicStage';

export type RootStackParamList = {
  [key in RootStackKey]: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Top'} component={TopScreen} />
          <Stack.Screen name={'StageList'} component={StageListScreen} />
          <Stack.Screen name={'BasicStage'} component={BasicStageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
