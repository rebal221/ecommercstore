import { StyleSheet } from 'react-native'
import { getTheme } from '../../themes/themeController';

const theme = getTheme();
const style = StyleSheet.create({
    headerContent: {
        backgroundColor: theme.seoundColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        height: 60,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    logoView: {
        width: 150,
        height: '100%',
    },
    logo: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    }
});

export default style