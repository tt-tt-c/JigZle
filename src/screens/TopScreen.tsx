import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import ShareButton from '../components/ShareButton';
import MapLinkButton from '../components/MapLinkButton';
import { NavigationStackProp } from 'react-navigation-stack';
import { RootStackParamList } from '../../App';

type Props = {
  navigation: NavigationStackProp<RootStackParamList>;
};

const TopScreen = ({navigation}:Props) => {
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
        <ShareButton />
        <MapLinkButton />
      </View>
      <View>
        <Image
          style={styles.image}
          source={require('../assets/img/basic_slide_01.webp')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});

export default TopScreen;
