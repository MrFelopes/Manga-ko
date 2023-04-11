import { useEffect } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { styles } from '../utils/styles';
import * as axios from 'axios';

export default function ShowManga({navigation}){
    const mangaID = '';

   const axios = require('axios');

   const baseUrl = 'https://api.mangadex.org/';

   (async () => {
    const resp = await axios.get(`${baseUrl}/manga/${mangaID}/feed}`);
        console.log(resp.data.data.map(chapter => chapter.id));
    });

    
    return (
        <View style={styles.container}>
            <Text>Teste de visualização</Text>
        </View>
    )
};

