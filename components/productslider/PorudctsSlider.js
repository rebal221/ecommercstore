import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import style from '../../styles/components/productslider/ProductsSlider';
import Product from '../product/Product';

// Mapping of category titles to image sources
// const categoryImages = {
//     Fiction: require('../../assets/data/categories/Fiction.jpg'),
//     Thriller: require('../../assets/data/categories/Thriller.jpg'),
//     Fantasy: require('../../assets/data/categories/Fantasy.jpg'),
//     Kids: require('../../assets/data/categories/Kids.jpg'),
//     Health: require('../../assets/data/categories/Health.jpg'),
//     Romance: require('../../assets/data/categories/Romance.jpg'),
// };

const ProductsSlider = ({ title, products }) => {

    return (
        <View style={[style.scrollBox]}>
            <View>
                <Text style={[style.sliderTitle]}>
                    {title}
                </Text>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={style.scrollView}>
                {products.map((product, index) => (
                    <Product
                        title={product.title}
                        description={product.description}
                        publisher={product.publisher}
                        rating={product.rating}
                        image={product.image} />
                ))}
            </ScrollView>
        </View>
    );
};

export default ProductsSlider;
