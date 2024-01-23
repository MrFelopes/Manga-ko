import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { styles } from '../utils/styles';

export default function ShowManga(){

    const mangaID = '6e445564-d9a8-4862-bff1-f4d6be6dba2c';

    const linguas = ['en', 'pt-br'];

    const baseUrl = 'https://api.mangadex.org/';

    const [datac, setDatac] = useState([]);
    
    const capitulo = 'dc4984fc-1cf9-490b-b330-7d86b926cd77';

    let host, hash, port, data, datasaver;

   function ReceberCapitulos() {
        fetch(`${baseUrl}manga/${mangaID}/feed` , { method: 'GET', params:{ translatedLanguage: linguas } })
        .then((response) => response.json())
        .then((json) => setDatac(json.data))
        .catch((error) => console.log(error))
    };

    const resp = datac.map(chapter => chapter.id);

    function butao() {
        console.log(datac.map(chapter => chapter.id));
    }

    function DownloadCapitulos(){
        fetch(`${baseUrl}at-home/server/${capitulo}` , { method: 'GET' })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => console.log(error))

        host = resp.baseUrl;
        chapterHash = resp.chapterhash;
        data = resp.data;
        datasaver = resp.datasaver;

    }
    
    return (
        <View>
            <Text>Teste de visualização</Text>
            <Button onPress={ReceberCapitulos}>Poggggggg</Button>
            <Button onPress={butao}>anata ni take</Button>
            <Button onPress={DownloadCapitulos}>Download</Button>
        </View>
    );
};


// dc4984fc-1cf9-490b-b330-7d86b926cd77
 