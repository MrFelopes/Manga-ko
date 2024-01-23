import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Image, TextInput, Dimensions } from "react-native";
import axios from "axios";
import { styles } from "../utils/styles";

export default function SearchManga() {
  const [title, setTitle] = useState('');
  const URLpadrao = 'https://api.mangadex.org';
  const [manga, setManga] = useState([]);
  const [mangaImgs, setMangaImgs] = useState([]);
  const windowDimensions = Dimensions.get('window');

  useEffect(() => {
    if (!title) return;
    if (title.length <= 1 && manga) {
      setManga([]);
      setMangaImgs([]);
      return;
    }
    const getManga = async () => {
      try {
        const resposta = await axios.get(`${URLpadrao}/manga?title=${title}`);
        setManga(resposta.data.data);

        const coverIds = resposta.data.data.map((manga) =>
          manga.relationships.find((rel) => rel.type === 'cover_art')?.id
        );
        console.log('Cover IDs:', coverIds);

        const imgResponses = await Promise.all(
          coverIds.map(async (coverId) => {
            if (coverId) {
              const coverRes = await axios.get(`${URLpadrao}/cover/${coverId}`);
              console.log("DEBUG: ", coverRes.data.data)
              return coverRes.data.data.attributes.fileName;
            }
          })
        );
        setMangaImgs(imgResponses);
        console.log(imgResponses);
      } catch (error) {
        console.error("Erro ao obter dados do MangaDex:", error);
      }
    };
    getManga();
  }, [title]);

  return (
    <View style={styles.fullBody}>
      <Text style={styles.textBigBold}>Lista de Mangás:</Text>
      <FlatList
        style={styles.flatlistM}
        columnWrapperStyle={{ flex: 1, justifyContent: 'space-around'}}
        data={manga}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <Text style={styles.textSmallBold}>{item.attributes.title.en}</Text>
            {mangaImgs[index] && (
              <View style={styles.mangaView}>
                <Image
                  style={styles.mangaImgs}
                  source={{ uri: `https://uploads.mangadex.org/covers/${item.id}/${mangaImgs[index]}` }}
                />
              </View>
            )}
          </View>
        )}
        numColumns={2}
        key={windowDimensions.width >= 600 ? 2 : 1}
      />
      <TextInput
        label="Digite o título do mangá"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
    </View>
  );
}