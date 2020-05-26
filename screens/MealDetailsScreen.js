import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButtons from '../components/HeaderButton';

const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

MealDetailsScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const title = (MEALS.find(meal => meal.id === mealId)).title;
    return {
        headerTitle: title,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
                <Item
                    title='optional'
                    iconName='ios-star'
                    onPress={() => console.log("FAVORITE")}
                />
            </HeaderButtons>
        )
    }
}

export default MealDetailsScreen;
