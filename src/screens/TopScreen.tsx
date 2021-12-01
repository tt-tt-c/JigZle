import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import {NavigationStackProp} from 'react-navigation-stack';
import ShareButton from '../components/ShareButton';
import MapLinkButton from '../components/MapLinkButton';

const TopScreen = () => {
  const navigation = useNavigation<NavigationStackProp<RootStackParamList>>();
  return (
    <>
      <View>
        <Text>Jigzle</Text>
        <Text>謎解きゲーム</Text>
      </View>

      <View>
        <Text>16問の謎に解答し、開放されるラスト謎を解き明かせ</Text>
      </View>

      <View>
        <Button
          title="Game Start"
          onPress={() => navigation.navigate('StageList')}
        />
        <Button
          title="Reset"
          onPress={() => navigation.navigate('StageList')}
        />
      </View>

      <View>
        <ShareButton/>
        <MapLinkButton/>
      </View>
    </>
  );
};

export default TopScreen;
