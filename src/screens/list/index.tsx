import React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ListData from '../../utils/fake-data';
import ListItem from './components/item';

//
//

export interface IListItem {
  id: string;
  name: string;
  description: string;
  price: string;
  salePrice: string;
  brand: string;
}

const ListScreen = () => {
  return (
    <SafeAreaView edges={['top', 'bottom']} >
      <FlatList
        data={ListData}
        initialNumToRender={5}
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{paddingHorizontal: 16}}
      />
    </SafeAreaView>
  );
};

export default ListScreen;
