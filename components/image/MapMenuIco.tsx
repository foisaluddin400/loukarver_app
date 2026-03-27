import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  color: string;
};

const MapMenuIco: React.FC<Props> = ({ color }) => {
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill={ color }>
        <Path
          d="M12 13C12.7956 13 13.5587 12.6839 14.1213 12.1213C14.6839 11.5587 15 10.7956 15 10C15 9.20435 14.6839 8.44129 14.1213 7.87868C13.5587 7.31607 12.7956 7 12 7C11.2044 7 10.4413 7.31607 9.87868 7.87868C9.31607 8.44129 9 9.20435 9 10C9 10.7956 9.31607 11.5587 9.87868 12.1213C10.4413 12.6839 11.2044 13 12 13Z"
          stroke={ color }
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M17.8001 13.9379H17.7891C18.5109 12.8799 18.9286 11.6441 18.9967 10.3651C19.0648 9.08607 18.7807 7.81289 18.1752 6.68419C17.5698 5.55548 16.6663 4.61452 15.5632 3.96376C14.46 3.31299 13.1994 2.97739 11.9187 2.99347C10.638 3.00956 9.3862 3.37673 8.29971 4.05499C7.21322 4.73326 6.33365 5.69662 5.75678 6.84018C5.17991 7.98373 4.92785 9.26364 5.02805 10.5405C5.12825 11.8174 5.57687 13.0424 6.32505 14.0819H6.30905L6.44905 14.2529C6.54905 14.3796 6.64905 14.5033 6.74905 14.6239L12.0001 20.9999L17.1301 14.7519C17.3241 14.5426 17.5041 14.3229 17.6701 14.0929L17.8001 13.9379Z"
          stroke={ color }
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export default MapMenuIco;

const styles = StyleSheet.create({});
