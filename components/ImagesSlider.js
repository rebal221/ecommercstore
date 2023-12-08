import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import style from '../styles/components/ImagesSlider';
import { SliderBox } from 'react-native-image-slider-box';
import { getTheme } from '../themes/themeController';

const ImagesSlider = () => {
    const theme = getTheme()
    const popularProducts = [
        require('../assets/data/categories/1.jpg'),
        require('../assets/data/categories/2.jpg'),
        require('../assets/data/categories/3.jpg'),
        require('../assets/data/categories/Fantasy.jpg'),
        require('../assets/data/categories/Fiction.jpg'),
        require('../assets/data/categories/1.jpg'),
        require('../assets/data/categories/2.jpg'),
    ];

    const { width: screenWidth } = Dimensions.get('window');

    return (
        <View style={style.NavigationBarContent}>
            <SliderBox
                images={popularProducts}
                sliderBoxHeight={200}
                onCurrentImagePressed={(index) => console.warn(`image ${index} pressed`)}
                parentWidth={screenWidth}
                autoplay
                circleLoop
                dotColor={theme.primaryColor}
                inactiveDotColor="#90A4AE" 
            />
        </View>
    );
};
 

export default ImagesSlider;
