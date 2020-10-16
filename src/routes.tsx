import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrpahanagesMap from './Pages/OrpahangesMap';
import OrphanageDetails from './Pages/OrphanageDetails';
import OrphanageData from './Pages/CreateOrphanage/OrphanageData';
import SelectMapPosition from './Pages/CreateOrphanage/SelectMapPosition';
import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f2f3f5' },
        }}
      >
        <Screen name="OrpahanagesMap" component={OrpahanagesMap} />

        <Screen
          name="OrphanageDetails"
          options={{
            headerShown: true,
            header: () => <Header title="Orfanato" showCancel={false} />,
          }}
          component={OrphanageDetails}
        />

        <Screen
          name="OrphanageData"
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />,
          }}
          component={OrphanageData}
        />

        <Screen
          name="SelectMapPosition"
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />,
          }}
          component={SelectMapPosition}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
