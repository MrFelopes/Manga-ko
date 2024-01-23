import {View} from 'react-native';
import { Button, Text } from 'react-native-paper';
import { styles } from '../utils/styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.fullBody}>
        <View style={styles.container}>
        <Text style={styles.textBigBold}>Bem-Vindo(a) ao projeto de app para o MangaDex</Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('ShowManga')}
          style={styles.button}
        >
          Teste
        </Button>
      </View>
    </View>
  
  );
}