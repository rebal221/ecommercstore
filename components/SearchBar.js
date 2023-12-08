import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';

const SwitchComponent = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={{ width: '90%' }}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{
                    backgroundColor: 'white'
                }}
            />
        </View>
    );
};
export default SwitchComponent;