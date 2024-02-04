import {View} from 'react-native';
import { Button, Text } from 'react-native-paper';
import { styles } from '../utils/styles';
import { useState } from 'react';

export default function Home({ navigation }) {

  return (
      <View style={styles.fullBody}>
          <Text style={styles.textBigBold}>Welcome to (currently) MangaDex_App!</Text>
      </View>
    );
}