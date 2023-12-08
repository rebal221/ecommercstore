import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import style from '../../styles/components/product/Product';
import StarRating from 'react-native-star-rating-widget';

const Product = ({
    title,
    description,
    publisher,
    rating,
    image }) => { 
    return (
        <View style={[style.productBox]}>
            <View style={[style.productView]}>
                <Image 
                source={image} 
                style={style.productImage} />
                <Text style={[style.productTitle]}>
                    {title}
                </Text>
                <Text style={[style.productdescription]}>
                    {description}
                </Text>
                <StarRating
                    starSize={20}
                    style={[style.rating]}
                    onChange={() => { }}
                    rating={rating}

                />
            </View>
        </View>
    );
};

export default Product;
