import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Text */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>~Alpie's To Do List~</Text>
      </View>

      {/* Hardcoded Entries */}
      <View style={styles.todoItems}>
        <Text style={styles.bullet}>🌸</Text>
        <Text style={styles.todoText}>MOB_APP_DEV - Assignment Work</Text>
      </View>
      <View style={styles.todoItems}>
        <Text style={styles.bullet}>🌸</Text>
        <Text style={styles.todoText}>Upper Body @ Nathan Gym</Text>
      </View>
      <View style={styles.todoItems}>
        <Text style={styles.bullet}>🌸</Text>
        <Text style={styles.todoText}>Girly-pop Brunch</Text>
      </View>

    <View style={styles.addButton}>
      <Text style={styles.headerTitle}>Add New Task</Text>
    </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  //Main Container Style
  container: {
    flex: 1,
    backgroundColor: '#EDD5ED',
  },
  //Background for Header
    header: {
    backgroundColor: '#A154A1',
    
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Header Title Style
  headerTitle: {
    fontSize: 38,
    fontStyle: 'italic',
    fontFamily: 'fantasy',
    fontWeight: 'bold',
    color: '#D9C5D9',
  },

  //To Do List Items Style
  todoItems: {
    backgroundColor: '#F5C1F5',
    borderRadius: 12,
    paddingVertical: 16, 
    paddingHorizontal: 20,
    marginBottom: 12,
    marginTop: 20,
    
    width: '100%',
    alignItems: 'flex-start',

    //To ensure text and bullet point are aligned
    flexDirection: 'row',
  },

  todoText: {
    fontFamily: 'sans-serif',
    fontWeight: 500,
    fontSize: 18,
    color: '#730B73',
  },
//Adding design elements for bullet points
  bullet: {
    fontSize: 18,
    marginRight: 8,
  },

//Add Button Styling
  addButton: {
    backgroundcolor: '#A154A1',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  
  addButtonText: { 
    fontSize: 38,
    fontStyle: 'italic',
    fontFamily: 'fantasy',
    fontWeight: 'bold',
    color: '#D9C5D9',
  }

});
