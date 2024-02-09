import {View} from 'react-native';
import { Button, Text } from 'react-native-paper';
import { styles } from '../utils/styles';
import { useState } from 'react';

export default function Home({ navigation }) {

  return (
      <View style={styles.fullBody}>
          <Text style={styles.textBigBold}>Welcome to Manga-ko!</Text>
          <Text style={styles.textSmall}>A soon to-be manga reading app using Mangadex's API.</Text>
      </View>
    );
}