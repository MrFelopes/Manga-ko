import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Image, TextInput, Dimensions } from "react-native";
import axios from "axios";
import { styles } from "../utils/styles";
import { useWindowDimensions } from "react-native";

export default function SearchManga() {
  const [title, setTitle] = useState('');
  const URLpadrao = 'https://api.mangadex.org';
  const [manga, setManga] = useState([]);
  const [mangaImgs, setMangaImgs] = useState([]);
  const { width, height } = useWindowDimensions();
  const {updateImage, setUpdateImage} = useState(0);
  const caracterePadrao = 'A';

  useEffect(() => {
    const getManga = async () => {
      try {
        if (title.length < 1){
          const resposta = await axios.get(`${URLpadrao}/manga?title=${caracterePadrao}`);
        setManga(resposta.data.data);

        const coverIds = resposta.data.data.map((manga) =>
          manga.relationships.find((rel) => rel.type === 'cover_art')?.id
        );

        const imgResponses = await Promise.all(
          coverIds.map(async (coverId) => {
            if (coverId) {
              const coverRes = await axios.get(`${URLpadrao}/cover/${coverId}`);
              return coverRes.data.data.attributes.fileName;
            }
          })
        );
        setMangaImgs(imgResponses);
        console.log(imgResponses);
        } else {;
        const resposta = await axios.get(`${URLpadrao}/manga?title=${title}`);
        setManga(resposta.data.data);

        const coverIds = resposta.data.data.map((manga) =>
          manga.relationships.find((rel) => rel.type === 'cover_art')?.id
        );

        const imgResponses = await Promise.all(
          coverIds.map(async (coverId) => {
            if (coverId) {
              const coverRes = await axios.get(`${URLpadrao}/cover/${coverId}`);
              return coverRes.data.data.attributes.fileName;
            }
          })
        );
        setMangaImgs(imgResponses);
        console.log(imgResponses);
        }
      } catch (error) {
        console.error("Erro ao obter dados do MangaDex:", error);
      }
    };
    getManga();
  }, [title]);

  return (
    <View style={styles.fullBody}>
      <Text style={styles.textBigBold}>Lista de Mangás:</Text>
      <TextInput
        placeholder="Digite o título do mangá."
        value={title}
        style={styles.textInput}
        onChangeText={(text) => setTitle(text)}
      />
      <FlatList
        style={{...styles.flatlistM,  flex: 1, minWidth: width }}
        data={manga}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <View style ={styles.containerManga}>
              <Text style={styles.textSmallBold}>{item.attributes.title.en}</Text>
              <Text style={styles.textSmall}>Status: {item.attributes.status}</Text>
              {mangaImgs[index] && (
                <View style={styles.mangaView}>
                  <Image
                    style={styles.mangaImgs}
                    source={{ uri: `https://uploads.mangadex.org/covers/${item.id}/${mangaImgs[index]}` }}
                    onError={(error) =>
                      setUpdateImage(updateImage + 1)
                    }
                  />
                  </View>
            )}
            </View>
          </View>
        )}
        numColumns={1}
        key={width >= 600 ? 2 : 1}
      />
    </View>
  );
}