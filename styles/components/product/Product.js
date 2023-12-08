import { StyleSheet } from 'react-native'
import { getTheme } from '../../../themes/themeController';


const theme = getTheme()
const style = StyleSheet.create({
    productBox: {
        height: 220,
        width: 150,
        marginTop: 10,
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#bdbdbd',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.0,
        shadowRadius: 5.62,
        elevation: 7,
        marginBottom: 13,
        display: 'flex',
        alignItems: 'center'
    },
    productTitle: {
        paddingLeft: 6,
        paddingRight: 6,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        height: 40,
        verticalAlign: 'middle',
        flexWrap: 'nowrap'
    },
    productdescription: {
        paddingLeft: 6,
        paddingRight: 6,
        textAlign: 'center',
        fontSize: 12,
        flexWrap: 'wrap',
        height: 30,
        color: '#9e9e9e'
    },
    rating: {
        width: '100%',
        marginTop: 5
    },
    productView: {
        width: '100%'
    },
    productImage: {
        width: '100%',
        height: 90,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        objectFit: 'cover'
    }
});

export default style