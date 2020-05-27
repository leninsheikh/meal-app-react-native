import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';



const MealList = props => {
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
                data={props.listData}
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



export default MealList;