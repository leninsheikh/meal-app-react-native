import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { MEALS } from '../data/dummy';
import MealItem from '../components/MealItem';



const CategoryMealsScreen = props => {
    const category = props.navigation.getParam('category');
    const displayedMeals = MEALS.filter(meal => {
        // return  meal.categoryIds.indexOf(category.id) >=0
        return meal.categoryIds.includes(category.id)
    })

    const renderMeals = itemData => (
        <MealItem
            item={itemData.item}
            onSelect={() => props.navigation.navigate({
                routeName: 'MealDetails',
                params: { mealId: itemData.item.id }
            })} />
    )

    return (
        <View style={styles.screen}>
            <FlatList
                style={{ width: '100%' }}
                data={displayedMeals}
                keyExtractor={(item => item.id)}
                renderItem={renderMeals}
            />
        </View>)
}

const styles = StyleSheet.create({
    screen: {
        margin: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


CategoryMealsScreen.navigationOptions = navigationData => {
    const category = navigationData.navigation.getParam('category');
    return {
        headerTitle: category.title
    }
}

export default CategoryMealsScreen;