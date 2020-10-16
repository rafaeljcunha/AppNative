import React from 'react';

import {Text, TouchableOpacity} from 'react-native';

export default function Button({
  style,
  icon,
  onClick,
  title,
  opacity,
  textStyle,
}) {
  return (
    <TouchableOpacity style={style} onPress={onClick} activeOpacity={opacity}>
      {icon ? icon : <Text style={textStyle}>{title || ''}</Text>}
    </TouchableOpacity>
  );
}
