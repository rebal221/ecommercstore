import { StyleSheet } from 'react-native'
import { getTheme } from '../../themes/themeController';

const theme = getTheme();
const style = StyleSheet.create({
    NavigationBarContent: {
        marginTop: 10,
        height: 200
    },
});

export default style