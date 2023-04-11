import {View} from 'react-native';
import { Button, Text } from 'react-native-paper';
import { styles } from '../utils/styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Bem-Vindo(a) ao projeto de app para o MangaDex</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('ShowManga')}
      >
        Teste
      </Button>
    </View>
  );
}