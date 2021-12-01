import React from 'react';
import {Button, Linking, Platform} from 'react-native';

const MapLinkButton = () => {
  const latitude = '40.7127753';
  const longitude = '-74.0059728';
  const label = 'New York, NY, USA';

  const url = Platform.select({
    ios: 'maps:' + latitude + ',' + longitude + '?q=' + label,
    android: 'geo:' + latitude + ',' + longitude + '?q=' + label,
  });

  return (
      <Button
        onPress={() => {
          if (typeof url === 'string') {
            Linking.canOpenURL(url).then(supported => {
              if (supported) {
                return Linking.openURL(url);
              } else {
                const browser_url =
                  'https://www.google.de/maps/@' +
                  latitude +
                  ',' +
                  longitude +
                  '?q=' +
                  label;
                return Linking.openURL(browser_url);
              }
            });
          }
        }}
        title={'地図を開く'}
      />
  );
};

export default MapLinkButton;
