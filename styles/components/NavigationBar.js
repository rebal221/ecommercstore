import { StyleSheet } from 'react-native'
import { getTheme } from '../../themes/themeController';

const theme = getTheme();
const style = StyleSheet.create({
    NavigationBarContent: {
        backgroundColor: theme.seoundColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5,
        height: 50,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -2 }, // Set a negative height for an upward offset
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
});

export default style