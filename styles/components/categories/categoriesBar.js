import { StyleSheet } from 'react-native'
import { getTheme } from '../../../themes/themeController';

const theme = getTheme()
const style = StyleSheet.create({
    scrollBox: {
        height: 140
    },
    scrollView: {
        flexDirection: 'row',
        padding: 16,
    },
    categoryContainer: {
        marginRight: 20,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc',
        backgroundColor: '#f0f0f0',
        width: 95,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    backgroundimage: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        objectFit: 'cover',
        position: 'absolute'
    },
    catText: {
        position: 'absolute',
        zIndex: 5,
        color: 'white',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
});

export default style