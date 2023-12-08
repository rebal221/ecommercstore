import { Text, View } from "react-native"
import style from "../styles/components/NavigationBar"
import { Icon } from "@rneui/themed"

const NavigationBar = () => {
    const items = [
        { icon: 'bookmark', link: '' },
        { icon: 'add', link: '' },
        { icon: 'book', link: '' }
    ]
    return (
        <View style={[style.NavigationBarContent]}> 
            {items.map((item) => {
                return (
                    <Icon name={item.icon} />
                )
            })}
        </View>
    )
}

export default NavigationBar