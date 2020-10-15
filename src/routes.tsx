import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OrpahanagesMap from './Pages/OrpahangesMap';
import OrphanageDetails from './Pages/OrphanageDetails';

const {Navigator, Screen} = createStackNavigator();

const Routes: React.FC = () => {
  return(
   <NavigationContainer>
     <Navigator screenOptions={{headerShown: false}}>
       <Screen name="OrpahanagesMap" component={OrpahanagesMap}/>
       <Screen name="OrphanageDetails" component={OrphanageDetails}/>
     </Navigator>
   </NavigationContainer>

  );
}

export default Routes;