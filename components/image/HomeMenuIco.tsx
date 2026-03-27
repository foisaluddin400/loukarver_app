import { StyleSheet, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  color: string;
};

const HomeMenuIco: React.FC<Props> = ({ color }) => {
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M4 21V9L12 3L20 9V21H14V14H10V21H4Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default HomeMenuIco;

const styles = StyleSheet.create({});