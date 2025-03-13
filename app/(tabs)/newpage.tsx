import { Text, View, StyleSheet, Image } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta es la Pagina Nueva</Text>
     <Image source={require('@/assets/images/josmar_dormido.jpg')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: '#fff',
  },

  image: {
    marginTop: 15,
    marginBottom: 15,
    padding: 25,
    width: 300,
    height: 300,
  },
});
