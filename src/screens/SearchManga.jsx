import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Image } from "react-native";
import axios from "axios";
import { styles } from "../utils/styles";

export default function SearchManga() {
  const title = 'Karakai Jouzu no Takagi-san';
  const URLpadrao = 'https://api.mangadex.org';
  const [manga, setManga] = useState([]); 

  useEffect(() => {
    
    const getManga = async () => {
      const resposta = await axios.get(`${URLpadrao}/manga?title=${title}`);
      setManga(resposta.data.data);
      console.log(resposta.data.data);
    } 
    getManga();
  }
  , []);


  return (
    <View style={styles.container}>
       <FlatList
      data={manga}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.box}>
          <Text>{item.attributes.title.en}</Text>
          <Image style={{width: 200, height: 200}} source={ item.relationships.cover_art}/>
        </View>
      )}
    />
      <Text>Lista de Mangás:</Text>
      
    </View>
  );
}

