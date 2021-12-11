import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View, Pressable} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {RootStackParamList} from '../../App';
import {BasicStage, getBasicStages} from '../config/db';

type BasicStages = Array<BasicStage>;

type Props = {
  navigation: NavigationStackProp<RootStackParamList>;
};

const StageListScreen = ({navigation}: Props) => {
  const [basicStages, setBasicStages] = useState<BasicStages>([]);
  useEffect(() => {
    const effectReportes = async () => {
      let nextBasicStages: BasicStages = [];
      nextBasicStages = await getBasicStages();
      setBasicStages(nextBasicStages);
    };
    effectReportes();
  }, []);

  let basicStagesElm = [];

  if (basicStages.length > 0) {
    let i = 0;
    while (i < basicStages.length) {
      let elm = [];
      for (let j = i; j < i + 3; j++) {
        if (j < basicStages.length) {
          elm.push(
            <Pressable
              key={`basicStageLink${basicStages[j].stage_no}`}
              style={styles.basicStagePressable}
              onPress={() => navigation.navigate('BasicStage')}>
              <Text style={styles.getBasicStageNum}>
                {basicStages[j].stage_no}
              </Text>
            </Pressable>,
          );
        } else {
          elm.push(
            <>
              <View
                key={`basicStageEmptyView${j}`}
                style={styles.basicStageEmpty}
              />
            </>,
          );
        }
      }
      basicStagesElm.push(
        <View
          key={`basicStageWrapper${Math.floor(i / 3)}`}
          style={styles.basicStageWrapper}>
          {elm}
        </View>,
      );
      i += 3;
    }
  }

  return (
    <>
      <View>
        <Text>問題一覧</Text>
      </View>
      <ScrollView>{basicStagesElm}</ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  basicStageWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'left',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  basicStagePressable: {
    flex: 1,
    width: 30,
    height: 50,
    marginRight: 5,
    backgroundColor: '#00f',
    alignItems: 'center',
  },
  getBasicStageNum: {
    fontSize: 30,
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
  basicStageEmpty: {
    flex: 1,
    width: 30,
    height: 50,
    marginRight: 5,
  },
});

export default StageListScreen;
