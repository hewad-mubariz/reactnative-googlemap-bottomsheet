import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SearchHandle = () => {
    return (
        <View style={styles.container}>
           <View style={styles.handle}/>
        </View>
    )
}

export default SearchHandle

const styles = StyleSheet.create({
    container:{
        padding:15,
        alignItems:'center',
        justifyContent:'center'
    },
    handle:{
        width:35,
        height:8,
        backgroundColor:'#d0d2d6',
        alignSelf:'center',
        borderRadius:5
    }
})
