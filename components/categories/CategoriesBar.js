import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import style from '../../styles/components/categories/categoriesBar';

// Mapping of category titles to image sources
const categoryImages = {
    Fiction: require('../../assets/data/categories/Fiction.jpg'),
    Thriller: require('../../assets/data/categories/Thriller.jpg'),
    Fantasy: require('../../assets/data/categories/Fantasy.jpg'),
    Kids: require('../../assets/data/categories/Kids.jpg'),
    Health: require('../../assets/data/categories/Health.jpg'),
    Romance: require('../../assets/data/categories/Romance.jpg'),
};

const CategoriesBar = () => {
    const categories = [
        { title: 'Fiction' },
        { title: 'Thriller' },
        { title: 'Fantasy' },
        { title: 'Kids' },
        { title: 'Health' },
        { title: 'Romance' },
    ];

    return (
        <View style={[style.scrollBox]}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={style.scrollView}>
                {categories.map((category, index) => (
                    <View key={index} style={style.categoryContainer}>
                        <Image style={[style.backgroundimage]} source={categoryImages[category.title]} />
                        <Text style={[style.catText]}>{category.title}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default CategoriesBar;
