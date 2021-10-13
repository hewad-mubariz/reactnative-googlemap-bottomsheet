import React,{useEffect} from 'react';
import {StyleSheet, Text, View,Button, TouchableOpacity} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants';
import WithModalProvider from './WithModalProvider';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import { useRef } from 'react';
import { useMemo } from 'react';
import { useLayoutEffect } from 'react';
import {createContactListMockData} from '../utils/Faker'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import SheetBackdrop from '../components/SheetBackdrop';
import SearchHandle from '../components/SearchHandle';
import LocationList from '../components/LocationList';

const Home = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  const snapPoints = useMemo(()=>[100,SCREEN_HEIGHT/2-100,SCREEN_HEIGHT*0.8],[]);
  const data = createContactListMockData()
  useLayoutEffect(()=>{
    bottomSheetModalRef.current?.present()
  },[])
  const animatedIndex = useSharedValue<number>(0);
  const animatedPosition = useSharedValue<number>(SCREEN_HEIGHT);


  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform:[
        {
          translateY:interpolate(animatedIndex.value,
          [0,1],
          [
            (-snapPoints[0]-35),
            (-snapPoints[1]-35)
          ],
          Extrapolate.CLAMP
          )
        }
      ]
    }
  })
  return (
    <View style={styles.container}>
   <Animated.View style={[animatedStyle,styles.mapContainer]}>
  
    <MapView   
       provider={PROVIDER_GOOGLE}
       style={styles.map}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
    <BottomSheetModal
          backgroundComponent={() => <SheetBackdrop />}
          handleComponent={SearchHandle}
          enableOverDrag={false}
          dismissOnPanDown={false}
          ref={bottomSheetModalRef}
          animatedPosition={animatedPosition}
          animatedIndex={animatedIndex}
          index={0}
          snapPoints={snapPoints}
        >
          <LocationList data={data}/>
        </BottomSheetModal>
      
      </Animated.View>
    </View>
  );
};

export default WithModalProvider(Home) ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer:{
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  map:{
    ...StyleSheet.absoluteFillObject,
  },
  listHeader: {
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 70,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
