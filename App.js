import Position from './components/Position';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Current weather:</Text>
      <Position />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61dafb',
    alignItems: 'center',
    justifyContent: 'center',
  },
    Text: {
      fontStyle: 'italic',
      fontWeight: 'bold'
    }
});
