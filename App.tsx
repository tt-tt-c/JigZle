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
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BasicStageScreen, StageListScreen, TopScreen} from './src/screens';

type RootStackKey = 'Top' | 'StageList' | 'BasicStage';

export type RootStackParamList = {
  [key in RootStackKey]: undefined
};
const Drawer = createDrawerNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Top">
        <Drawer.Screen name={'Top'} component={TopScreen} />
        <Drawer.Screen
          name={'StageList'}
          component={StageListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name={'BasicStage'}
          component={BasicStageScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
