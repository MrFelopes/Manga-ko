import { StyleSheet, useWindowDimensions, Platform} from 'react-native';
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const window = () => useWindowDimensions();


    export const styles = StyleSheet.create({
        fullBody: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100%',
            height: Platform.select({
                ios: windowHeight,
                android: windowHeight,
                web: window.height,
            }),
            backgroundColor: '#514E57',
        },
        container: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        containerManga: {
            backgroundColor: '#3d3945',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: 300,
            height: Platform.select({
                ios: windowHeight * 0.5,
                android: windowHeight * 0.5,
                web: window.height * 0.8,
            }),
            borderRadius: 10,
            margin: 10,
        },
        textBold: {
            color: '#e2e1e6',
            fontSize: 24,
            fontWeight: 'bold',
        },
        text: {
            color: '#e2e1e6',
            fontSize: 24,
        },
        textSmall: {
            color: '#e2e1e6',
            fontSize: 16,
        },
        textSmallBold: {
            color: '#e2e1e6',
            fontSize: 16,
            fontWeight: 'bold',
            maxWidth: 150,
            textAlign: 'center',
            marginTop: 10,
        },
        textBig: {
            color: '#e2e1e6',
            fontSize: 32,
            padding: 10,
        },
        textBigBold: {
            color: '#e2e1e6',
            fontSize: 32,
            fontWeight: 'bold',
            padding: 10,
            marginTop: 10,
            textAlign: 'center',
        },
        textInput: {
            height: 40,
            width: '80%',
            margin: 12,
            borderWidth: 1,
            padding: 10,
            placeholderTextColor: '#e2e1e6',
        },
        button: {
            alignItems: 'center',
            backgroundColor: '#8f1717',
            padding: 10,
        },
        mangaImgs: {
            width: 200,
            height: 300,
            borderWidth: 1,
            borderColor: '#000',
        },
        mangaView: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: 300,
            margin: 10,
        },
        flatlistM: {
            minWidth: Platform.select({
                ios: windowWidth,
                android: windowWidth,
                web: window.width,
            }),
        },
    });
