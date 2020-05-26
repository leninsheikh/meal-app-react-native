import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = props => {
    const { category } = props;

    let TouchableCmp = Platform.OS === 'android' && Platform.Version >= 21
        ? TouchableNativeFeedback
        : TouchableOpacity;

    return (
        <View style={styles.gridItem}>
            <TouchableCmp style={{flex: 1}} onPress={props.onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: category.color } }}>
                    <Text numberOfLines={2} style={styles.title}>{category.title}</Text>
                </View>
            </TouchableCmp>
        </View>

    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 21,
        textAlign: 'right'
    }
});

export default CategoryGridTile;