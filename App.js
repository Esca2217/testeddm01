import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Estefani Lopes da Silva to start working on your app!</Text>
      <Text>Ana Carolina Paganini Olindino to start working on your app!</Text>
      <Text>Clone do projeto aula 04-03-2024 3b3 lado A</Text>
     <Button title='Enviar'> </Button>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
