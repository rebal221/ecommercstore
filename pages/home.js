import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import AppTemplate from '../template/AppTemplate';
import CategoriesBar from '../components/categories/CategoriesBar';
import SwitchComponent from '../components/SearchBar';
import ProductsSlider from '../components/productslider/PorudctsSlider';
import ImagesSlider from '../components/ImagesSlider';

const Home = () => {
    const popularproducts = [
        {
            title: 'The Catcher in the Rye',
            description: 'A classic novel about the struggles of growing up.',
            rating: 3,
            publisher: 'Little, Brown and Company',
            image: require('../assets/data/categories/1.jpg'),
        },
        {
            title: 'To Kill a Mockingbird',
            description: 'A powerful story of racial injustice and moral growth.',
            rating: 4.8,
            publisher: 'J.B. Lippincott & Co.',
            image: require('../assets/data/categories/2.jpg'),
        },
        {
            title: '1984',
            description: 'A dystopian novel depicting a totalitarian regime.',
            rating: 4.7,
            publisher: 'Secker & Warburg',
            image: require('../assets/data/categories/3.jpg'),
        },
        {
            title: 'Pride and Prejudice',
            description: 'A romantic novel exploring themes of love and class.',
            rating: 4.6,
            publisher: 'T. Egerton, Whitehall',
            image: require('../assets/data/categories/Fantasy.jpg'),
        },
        {
            title: 'The Great Gatsby',
            description: 'A tale of the American Dream and its corruption.',
            rating: 4.4,
            publisher: 'Charles Scribner\'s Sons',
            image: require('../assets/data/categories/Fiction.jpg'),
        },
        {
            title: 'Harry Potter and Stone',
            description: 'The start of the magical journey of Harry Potter.',
            rating: 4.9,
            publisher: 'Bloomsbury',
            image: require('../assets/data/categories/1.jpg'),
        },
        {
            title: 'The Hobbit',
            description: 'An adventure novel by J.R.R. Tolkien.',
            rating: 2,
            publisher: 'George Allen & Unwin',
            image: require('../assets/data/categories/2.jpg'),
        },
    ];
    return (
        <AppTemplate>
            <ScrollView >
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <CategoriesBar />
                    <SwitchComponent />
                    <ImagesSlider />
                    <ProductsSlider title={'Popular Book'} products={popularproducts} />
                    <ProductsSlider title={'Best Seller'} products={popularproducts} />
                </View>
            </ScrollView>
        </AppTemplate>
    );
};

export default Home;
