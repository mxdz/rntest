import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ListScreen, {IListItem} from './screens/list';
import ItemScreen from './screens/item';

import {ThemeFont} from './components/typography';

//
//

export type RootStackParamList = {
  ListScreen: undefined;
  ItemScreen?: IListItem;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Stack = () => {
  return (
    <RootStack.Navigator
      initialRouteName="ListScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitle: '',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 16,
          ...(ThemeFont.medium as any),
        },
        contentStyle: {
          backgroundColor: '#E6E6E6',
        },
      }}>
      <RootStack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{title: 'Items'}}
      />
      <RootStack.Screen
        name="ItemScreen"
        component={ItemScreen}
        options={({route}) => ({
          title: route?.params?.name,
        })}
      />
    </RootStack.Navigator>
  );
};

export default Stack;
