import { StyleSheet} from 'react-native';
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



    export const styles = StyleSheet.create({
        fullBody: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100%',
            width: windowWidth,
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
            height: windowHeight * 0.5,
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
            minWidth: windowWidth,
        },
    });
