import React from 'react';
import {Button, Share} from 'react-native';

const ShareButton = () => {
  const openShare = () => {
    Share.share(
      {
        title: 'タイトル',
        message: '概要',
      },
      {},
    ).then(result => {
      if (result.action === Share.dismissedAction) {
        // シェアを中断した場合の処理(iOSのみ)
      } else if (result.action === Share.sharedAction) {
        // シェアを実行した場合(Androidの場合は常にここの処理が実行される)
      } else {
      }
    });
  };

  return <Button onPress={() => openShare()} title={'シェアする'} />;
};

export default ShareButton;
