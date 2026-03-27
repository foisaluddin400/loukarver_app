import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  color: string;
};

const FutureMenuIco: React.FC<Props> = ({ color }) => {
  return (
    <View>
      <Svg width="30" height="20" viewBox="0 0 30 20" fill={ color }>
        <Path
          d="M15.0033 20C14.83 20 14.6633 19.9333 14.5299 19.8066L5.195 10.4709C5.13318 10.4092 5.08414 10.336 5.05068 10.2553C5.01722 10.1746 5 10.0881 5 10.0008C5 9.91348 5.01722 9.827 5.05068 9.74634C5.08414 9.66567 5.13318 9.59239 5.195 9.5307L14.5299 0.195012C14.5916 0.133194 14.6649 0.0841499 14.7455 0.0506871C14.8262 0.0172244 14.9127 0 15 0C15.0873 0 15.1738 0.0172244 15.2544 0.0506871C15.3351 0.0841499 15.4084 0.133194 15.4701 0.195012L24.805 9.5307C25.065 9.79076 25.065 10.2109 24.805 10.4709L15.4701 19.8066C15.3434 19.9333 15.1767 20 15.0033 20ZM6.60857 9.99748L15.0033 18.3929L23.3981 9.99748L15.0033 1.60203L6.60857 9.99748Z"
          fill={ color }
        />
      </Svg>
    </View>
  );
};

export default FutureMenuIco;

const styles = StyleSheet.create({});
