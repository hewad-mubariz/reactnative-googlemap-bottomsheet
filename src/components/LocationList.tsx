import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LocationCard from './LocationCard'
import {BottomSheetFlatList} from '@gorhom/bottom-sheet'
interface LocationListProps{
    data:any[]
}

const LocationList = ({data}:LocationListProps) => {
    console.log(data);
    return (
     <BottomSheetFlatList
        data={data}
        renderItem={({item})=><LocationCard location={item}/>}
     >

     </BottomSheetFlatList>
    )
}

export default LocationList

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
