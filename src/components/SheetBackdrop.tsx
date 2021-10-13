import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SheetBackdrop = () => {
    return (
        <View style={[styles.container, styles.androidContainer]} />

    )
}

export default SheetBackdrop

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      overflow: 'hidden',
    },
    androidContainer: {
      backgroundColor: 'rgba(255,255,255, 1)',
    },
  });
