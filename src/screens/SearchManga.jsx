import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Image} from "react-native";
import axios from "axios";
import { styles } from "../utils/styles";
import { TextInput } from "react-native-paper";

export default function SearchManga() {
  const [title, setTitle] = useState('');
  const URLpadrao = 'https://api.mangadex.org';
  const [manga, setManga] = useState([]);
  const [mangaImgs, setMangaImgs] = useState([]);


  useEffect(() => {
    if (!title) return;
    if (title <=1 && manga) {
      setManga([]);
      setMangaImgs([]);
      return;
    }
    const getManga = async () => {
      const resposta = await axios.get(`${URLpadrao}/manga?title=${title}`)

      setManga(resposta.data.data);

      //PRA NÃO ESQUECER
      const coverIds = resposta.data.data.map((manga) => manga.relationships.find((rel) => rel.type === 'cover_art')?.id);
      console.log('Cover IDs:', coverIds) 

      const imgResponses = await Promise.all(
        coverIds.map(async (coverId) => {
          if (coverId){
            const coverRes = await axios.get(`${URLpadrao}/cover/${coverId}`);
            console.log("DEBUG: ", coverRes.data.data)
            return coverRes.data.data.attributes.fileName;
        }})
      );
      setMangaImgs(imgResponses);
      console.log(imgResponses);
    } 
    getManga();
  }
  , [title]);


  return (
    <View style={styles.containerFullWidth}>
      <Text>Lista de Mangás:</Text>
       <FlatList
          style={{ flex: 1, maxWidth: "100%"}}
          data={manga}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
          
        <View style={styles.containerFullWidth}> 
          <Text>{item.attributes.title.en}</Text>
          {mangaImgs[index] &&(
            <View style={{ flex: 1, flexDirection: "row"}}> 
              <Image style={{width: 214, height: 314}} source={{uri: `https://uploads.mangadex.org/covers/${item.id}/${mangaImgs[index]}`}}/>
            </View>
          )}
        </View>

      )}
      numColumns={mangaImgs.length > 0 ? 2 : 1}
      key={mangaImgs.length > 0 ? 2 : 1}
    />
    <TextInput 
      label="Digite o título do mangá"
      value={title}
      onChangeText={(text) => setTitle(text)}
    />
    </View>
  );
}

