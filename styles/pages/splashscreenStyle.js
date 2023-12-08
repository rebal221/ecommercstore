import { StyleSheet } from 'react-native'
import { getTheme } from '../../themes/themeController';

const theme = getTheme();
const style = StyleSheet.create({
    splashContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.backgroundColor
    },
    logo: {
        width: 100,
        height: 150,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    copyRightView: { position: 'absolute', bottom: 10 },
    copyRight: {
        color: theme.secutextColor
    },
    progressBarStyle: {
        color: theme.primaryColor
    }
});

export default style