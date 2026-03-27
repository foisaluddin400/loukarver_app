import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const DateTimeIco = () => {
  return (
    <View>
     <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
<G clip-Path="url(#clip0_72_113)">
<Path d="M18 2H17V1C17 0.4 16.6 0 16 0C15.4 0 15 0.4 15 1V2H5V1C5 0.4 4.6 0 4 0C3.4 0 3 0.4 3 1V2H1C0.5 2 0 2.4 0 3V17C0 17.6 0.5 18 1 18H7.1C6.4 16.8 6 15.4 6 14C6 9.6 9.6 6 14 6C15.9 6 17.6 6.7 19 7.8V3C19 2.5 18.5 2 18 2Z" fill="#A16438"/>
<Path d="M14 8C10.7 8 8 10.7 8 14C8 17.3 10.7 20 14 20C17.3 20 20 17.3 20 14C20 10.7 17.3 8 14 8ZM16 15H14C13.4 15 13 14.6 13 14V11C13 10.4 13.4 10 14 10C14.6 10 15 10.4 15 11V13H16C16.6 13 17 13.4 17 14C17 14.6 16.6 15 16 15Z" fill="#A16438"/>
</G>
<Defs>
<ClipPath id="clip0_72_113">
<Rect width="20" height="20" fill="white"/>
</ClipPath>
</Defs>
</Svg>

    </View>
  )
}

export default DateTimeIco

const styles = StyleSheet.create({})