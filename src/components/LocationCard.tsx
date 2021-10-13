import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

interface LocationCardProps{
    location:any
}

const LocationCard = ({location}:LocationCardProps) => {
    return (
        <View style={styles.container}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={{uri:location.image}} style={styles.image}/>
            <Text style={{margin:10,fontWeight:'bold',fontSize:20}}>{location.name}</Text>
        </View>
        <Text>{location.description}</Text>
        </View>
    )
}

export default LocationCard

const styles = StyleSheet.create({
    container:{
        margin:20,
        borderWidth:1,
        borderColor:'#e9ecf2',
        padding:10,
        borderRadius:10,
    },
    image:{
        height:70,
        width:70,
        borderRadius:70,
    }
})
