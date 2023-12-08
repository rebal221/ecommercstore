import React, { useRef, useState } from 'react';
import { View, SafeAreaView, DrawerLayoutAndroid, Text, Button } from 'react-native';
import Header from '../components/Header';
import style from '../styles/template/primary';
import navigationView from '../components/drawer/naigationView'
import NavigationBar from '../components/NavigationBar';
const AppTemplate = ({ children }) => {
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('right');

    return (
        <SafeAreaView style={[style.safeArea]}>
            <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={300}
                drawerPosition={drawerPosition}
                renderNavigationView={navigationView}>
                <View style={{ flex: 1 }}>
                    <Header onpress={() => {
                        drawer.current.openDrawer()
                    }} />
                    {children}
                    <NavigationBar />
                </View>
            </DrawerLayoutAndroid>
        </SafeAreaView >

    );
};

export default AppTemplate;