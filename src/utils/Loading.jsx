import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="small" color='#9886a6'/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.7,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    }
});