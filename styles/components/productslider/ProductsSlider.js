import { StyleSheet } from 'react-native'
import { getTheme } from '../../../themes/themeController';

const theme = getTheme()
const style = StyleSheet.create({
    scrollBox: {
        width: '100%',
        padding: 15,
        paddingLeft: 17,
        paddingBottom: 5
    },
    sliderTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        borderBottomWidth: 1
    }
});

export default style