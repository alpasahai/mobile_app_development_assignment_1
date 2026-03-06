import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Text */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>~Alpie's To Do List~</Text>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  //Header Title Style
  headerTitle: {
    fontSize: 38,
    fontStyle: 'italic',
    fontFamily: 'fantasy',
    fontWeight: 'bold',
    color: '#D9C5D9',
  },
  //Content Container Style
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },

});
