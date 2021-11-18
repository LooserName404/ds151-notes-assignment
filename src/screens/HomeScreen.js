import React from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';
import NoteItem from '../components/NoteItem';

const temp = [
  { id: 1, title: 'lorem', content: 'ipsum dolor sit' },
  { id: 2, title: 'lorem', content: 'ipsum dolor sit' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Add Note" onPress={() => navigation.navigate('')} />
      <FlatList
        data={temp}
        keyExtractor={({ id }) => id}
        renderItem={({item}) => <NoteItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
