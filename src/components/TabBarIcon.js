import React from 'react';
import { Image } from 'react-native';

const TabBarIcon = ({image, selectImage, style = {}, focused}) => {
  const icon = focused ? selectImage : image;
  return (
    <Image
      source={icon}
      style={[{ marginBottom: -3, width: 26, height: 26 }, style]}
    />
  );
};

export default TabBarIcon;
