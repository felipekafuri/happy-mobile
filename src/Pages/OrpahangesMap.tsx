import React, { useCallback } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView,{ PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import mapMarker from '../assets/map-marker.png';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function OrpahanagesMap() {
  const navigation = useNavigation();

  const handleNavigateToOrphanageDetails = useCallback(() => {
    navigation.navigate('OrphanageDetails')
  },[])

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude:-16.6908352,
          longitude:-49.2985122,
          latitudeDelta: 0.008,
          longitudeDelta:0.008
          }}
        >
          <Marker 
            icon={mapMarker} 
            coordinate={{
                latitude:-16.6908352,
                longitude:-49.2985122
                }} 
            calloutAnchor={{
              x:2.7,
              y:0.8,
            }}
            >
              <Callout tooltip
                onPress={handleNavigateToOrphanageDetails}
              >
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>
                    Lar das meninas 
                  </Text>
                </View>
              </Callout>
            </Marker>
        </MapView>


        <View style={styles.footer}>
            <Text style={styles.footerText}>2 orfanatos encontrados</Text>

            <TouchableOpacity 
              style={styles.createOrphanageButton}
              onPress={()=>{}}
            >
              <Feather name="plus" size={20} color="#fff"/>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map:{
    width: Dimensions.get('window').width,
    height:  Dimensions.get('window').height,
  },

  calloutContainer:{
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255,0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText:{
    color: '#0089a5',
    fontSize: 12,
    fontFamily: 'Nunito_700Bold'
  },

  footer:{
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#ffff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },
  footerText:{
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold'
  },
  createOrphanageButton:{
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  }

}); 