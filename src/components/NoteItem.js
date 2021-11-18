import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { NotesContext } from '../contexts/NotesContext';

const NoteItem = ({ item, navigation }) => {
  const notesContext = useContext(NotesContext);

  const { id, title, content } = item;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableEdit}
        onPress={() => navigation.navigate('Form', { id, title, content })}
      >
        <View style={styles.leftSide}>
          <Text style={styles.id}>{id}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.rightSide}>
        <FontAwesome5
          name="trash-alt"
          size={32}
          color="gray"
          onPress={() => notesContext.removeNote({ id })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    height: 120,
    marginHorizontal: 3,
    marginVertical: 5,
  },
  touchableEdit: {
    flex: 7,
    flexDirection: 'row',
  },
  leftSide: {
    backgroundColor: '#aaa',
    flex: 2,
    justifyContent: 'center',
  },
  id: {
    fontSize: 32,
    textAlign: 'center',
  },
  body: {
    backgroundColor: '#ccc',
    flex: 5,
    padding: 10,
  },
  title: {
    fontSize: 24,
    flex: 2,
  },
  content: {
    fontSize: 16,
    flex: 3,
  },
  rightSide: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoteItem;
