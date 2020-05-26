import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const CategoryMealsScreen = props => {
    const category = props.navigation.getParam('category');
    return (
        <View style={styles.screen}>
            <Text>CategoryMealsScreen</Text>
            <Text>{category.title}</Text>
        </View>)
}

const styles = StyleSheet.create({
    screen: {
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