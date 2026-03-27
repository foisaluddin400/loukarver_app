import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  color: string;
};

const ConnectIco: React.FC<Props> = ({ color }) => {
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 2.84399L9.18999 9.21999L2.81299 12.031L9.18999 14.842L12 21.22L14.812 14.843L21.188 12.032L14.812 9.22099L12 2.84399Z"
          stroke={ color }
          stroke-width="1.5"
        />
      </Svg>
    </View>
  );
};

export default ConnectIco;

const styles = StyleSheet.create({});
