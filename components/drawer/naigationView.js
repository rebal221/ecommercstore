import style from '../../styles/components/drawer/naigationView'
import { View, Text, Button, Image } from 'react-native';
import PageButton from './PageButton';

const navigationView = () => {
    const pages = [
        { title: 'Profile', link: '' },
        { title: 'All Book', link: '' },
        { title: 'All Categories', link: '' },
        { title: 'Publishers', link: '' },
        { title: 'Libraries', link: '' },
        { title: 'ِAbout us', link: '' },
        { title: 'Connect us', link: '' },
        { title: 'Settings', link: '' },
        { title: 'Log in', link: '' },
    ]
    return (
        <View style={[style.container, style.navigationContainer]}>
            <View style={[style.upItem]}>
                <View style={[style.profileDiv]}>
                    <Image style={[style.profilephoto]} source={require('../../assets/profile/user.jpg')} />
                </View>
                <Text style={style.UserName}>User Name</Text>
                <Text style={style.Role}>Role</Text>
                <View style={[style.pages]}>
                    {pages.map((page, index) => {
                        return (<PageButton title={page.title} onPress={() => { }} />)
                    })}
                </View>
            </View>
            <View style={[style.downItem]}>
                <Image style={[style.appLogo]} source={require('../../assets/appLogo/logo.png')} />
            </View>
        </View>
    )
};
export default navigationView