import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';

export default function App ()  {

  const [Items, setItems] = useState([
    { key: '1', name: 'Item 1' },
    { key: '2', name: 'Item 2' },
    { key: '3', name: 'Item 3' },
    { key: '4', name: 'Item 4' },
    { key: '5', name: 'Item 5' },
    { key: '6', name: 'Item 6' },
    { key: '7', name: 'Item 7' },
    { key: '8', name: 'Item 8' },
    { key: '44',name: 'Item 9' },
    { key: '68',name: 'Item 27' },
    { key: '0', name: 'Item 78' },
  ]);
//   const [Refreshing, setRefreshing] = useState(false);

//   const onRefresh = () => {
//     setRefreshing(true);
//     setItems([...Items, { key: 69, item: 'Item 69' }]);
//     setRefreshing(false);
//   }

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={Items}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});