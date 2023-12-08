import { View, Text } from "react-native"
import style from '../../styles/components/drawer/PageButton'

const PageButton = ({ title, onPress }) => {
    return (
        <View style={[style.container]} onPress={onPress}>
            <Text>{title}</Text>
        </View>
    )
}

export default PageButton