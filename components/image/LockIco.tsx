import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const LockIco = () => {
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<Path d="M12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V8H6V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V8H16V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3ZM13 18V14H11V18H13Z" fill="#8B4513"/>
<Path fill-rule="evenodd" clip-rule="evenodd" d="M21 10V22H3V10H21ZM5 12V20H19V12H5Z" fill="#8B4513"/>
</Svg>

    </View>
  )
}

export default LockIco

const styles = StyleSheet.create({})