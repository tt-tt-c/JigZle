import {NativeBaseProvider, Box} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {BasicStage, getBasicStages} from '../config/db';

type BasicStages = Array<BasicStage>;

const StageListScreen = () => {
  const [basicStages, setBasicStages] = useState<BasicStages>([]);

  useEffect(() => {
    const effectReportes = async () => {
      let nextBasicStages:BasicStages = [];
      nextBasicStages = await getBasicStages();
      setBasicStages(nextBasicStages);
    };
    effectReportes();
  }, []);

  return (
    <>
      <View>
        <Text>問題一覧</Text>
      </View>
      <View>
        <NativeBaseProvider>
          {basicStages.length > 0 && (
            <Box
              flex={1}
              txtDecor="#fff"
              bg="#000"
              alignItems="center"
              justifyContent="center">
              {basicStages[0].created_at}
            </Box>
          )}
        </NativeBaseProvider>
      </View>
    </>
  );
};

export default StageListScreen;
