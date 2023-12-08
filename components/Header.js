import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import style from '../styles/components/header';
// import { FaAlignRight } from 'react-native-vector-icons/FontAwesome6'
import { Icon } from '@rneui/themed';

const Header = ({onpress}) => {
  return (
    <View style={[style.headerContent]}>
      <View style={[style.logoView]} >
        <Image source={require('../assets/appLogo/icontextLogo.png')} style={[style.logo]} />
      </View>
      <Icon
        onPress={onpress}
        name='menu' />
    </View>
  );
};

export default Header;