import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        bottom: 49,
        position: 'absolute',
        backgroundColor: '#131313',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
    },
    image: {
        height: 60,
        width: 60,
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: "center"
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: "space-around"
    },
    artist: {
        padding: 12,
        fontSize: 16,
        color: 'lightgrey',
    },
    title: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 15,
        fontWeight: 'bold',
    },
});

export default styles;