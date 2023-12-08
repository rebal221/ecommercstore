import { StyleSheet, Platform } from 'react-native'
import { getTheme } from '../../../themes/themeController';

const theme = getTheme();
const style = StyleSheet.create({
    container: {
        width: 150,
        height: 40,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor: theme.primaryColor,
    },
});

export default style