import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy';
import CategoryGridTile from '../components/CategoryGridTIle';
import ToggleDrawer from '../components/ToggleDrawer';


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

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: () => <ToggleDrawer navigation={navData.navigation}/>
    }
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