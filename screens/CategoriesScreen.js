import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy';
import Colors from '../data/constants/Colors';
import CategoryGridTile from '../components/CategoryGridTIle';

const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return <CategoryGridTile
            category={itemData.item}
            onSelect={() => props.navigation.navigate({
                routeName: 'CategoryMeals',
                params: { category: itemData.item }
            })}
        />
    }

    return (
        <FlatList
            renderItem={renderGridItem}
            numColumns={2}
            data={CATEGORIES}
            keyExtractor={(item, index) => item.id}
        />
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
})

export default CategoriesScreen;