import { StyleSheet } from 'react-native'
import { getTheme } from '../../themes/themeController';

const theme = getTheme();
const style = StyleSheet.create({
    splashContent: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});

export default style