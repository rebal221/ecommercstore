import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Image, ProgressBarAndroid, Button } from 'react-native';
import styles from '../styles/pages/splashscreenStyle' 

const SplashScreen = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const progressAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        Animated.timing(progressAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start(() => {
              navigation.navigate('Home');
        });
    }, [fadeAnim, progressAnim, navigation]);



    return (
        <View style={[styles.splashContent]}>
            <View style={[styles.container]}>
                <Animated.View style={{ opacity: fadeAnim }}>
                    <Image source={require('../assets/appLogo/logo.png')} style={styles.logo} />
                </Animated.View>
                <Animated.View style={{ opacity: progressAnim }}>
                    <ProgressBarAndroid style={[styles.progressBarStyle]} width={200} styleAttr="Horizontal" />
                </Animated.View>
            </View>
            <View style={[styles.copyRightView]}>
                <Text style={[styles.copyRight]}>
                    &copy; CopyRight {new Date().getFullYear()}
                </Text>
            </View>
        </View>
    );
};


export default SplashScreen;
