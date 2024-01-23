import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Image } from "react-native";
import axios from "axios";
import { styles } from "../utils/styles";

export default function SearchManga() {
  const title = 'Karakai Jouzu no Takagi-san';
  const URLpadrao = 'https://api.mangadex.org';
  const [manga, setManga] = useState([]);
  const [mangaImgs, setMangaImgs] = useState([]);

  useEffect(() => {
    
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
  , []);


  return (
    <View style={styles.container}>
       <FlatList
          data={manga}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (

        <View style={styles.box}> 
          <Text>{item.attributes.title.en}</Text>
          {mangaImgs[index] &&(
            <Image style={{width: 200, height: 200}} source={{uri: `https://uploads.mangadex.org/covers/${item.id}/${mangaImgs[index]}`}}/>
          )}
        </View>

      )}
    />
      <Text>Lista de Mangás:</Text>
      
    </View>
  );
}

