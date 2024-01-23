import { StyleSheet, useWindowDimensions } from 'react-native';

const { width } = () => useWindowDimensions();

  export const styles = StyleSheet.create({
      fullBody: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100%',
          width: width,

      },
      container: {
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
      },
      textBold: {
          color: '#000',
          fontSize: 24,
          fontWeight: 'bold',
      },
      text: {
          color: '#000',
          fontSize: 24,
      },
      textSmall: {
          color: '#000',
          fontSize: 16,
      },
      textSmallBold: {
          color: '#000',
          fontSize: 16,
          fontWeight: 'bold',
          maxWidth: 150,
          textAlign: 'center',
          minHeight: 100,
          marginTop: 100,
      },
      textBig: {
          color: '#000',
          fontSize: 32,
          padding: 10,
      },
      textBigBold: {
          color: '#000',
          fontSize: 32,
          fontWeight: 'bold',
          padding: 10,
          marginTop: 10,
      },
      textInput: {
          height: 40,
          width: '80%',
          margin: 12,
          borderWidth: 1,
          padding: 10,
      },
      button: {
          alignItems: 'center',
          backgroundColor: '#8f1717',
          padding: 10,
      },
      mangaImgs: {
          width: 200,
          height: 300,
      },
      mangaView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 300,
        minHeight: 200,
        margin: 10,
      },
      flatlistM : {
          minWidth: width,
      },

  })