import { StyleSheet, Platform } from 'react-native'
import { getTheme } from '../../themes/themeController';

const theme = getTheme();
const style = StyleSheet.create({
    safeArea: {
        paddingTop: Platform.OS === 'android' ? 40 : 0,
        flex: 1,
    },
});

export default style