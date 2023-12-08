import { StyleSheet, Platform } from 'react-native'
import { getTheme } from '../../../themes/themeController';

const theme = getTheme();
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16
    },
    navigationContainer: {
        backgroundColor: '#ecf0f1',
    },
    UserName: {
        paddingTop: 16,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    Role: {
        fontSize: 12
    },
    profileDiv: {
        width: 100,
        height: 100,
        borderRadius: 50,
        padding: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: theme.primaryColor,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    profilephoto: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
        objectFit: 'cover'
    },
    pages: {
        marginTop: 30
    },
    upItem: {
        display: 'flex',
        alignItems: 'center'
    },
    downItem: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 130
    },
    appLogo: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    }
});

export default style