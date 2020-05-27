import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToggleDrawer from '../components/ToggleDrawer';

const FilterScreen = () => {
    return <View style={styles.screen}><Text>Category</Text></View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

FilterScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: () => <ToggleDrawer navigation={navigationData.navigation} />
    }
}

export default FilterScreen;