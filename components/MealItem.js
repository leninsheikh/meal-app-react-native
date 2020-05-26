import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = props => {
    return (
        <TouchableOpacity onPress={props.onSelect}>
            <View style={styles.mealItem}>
                <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                    <ImageBackground
                        source={{ uri: props.item.imageUrl }}
                        style={styles.bgImage}
                    >
                        <Text numberOfLines={1} style={styles.mealTitle}>
                            {props.item.title}
                        </Text>
                    </ImageBackground>

                </View>
                <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                    <Text>{props.item.duration}m</Text>
                    <Text>{props.item.complexity.toUpperCase()}</Text>
                    <Text>{props.item.affordability.toUpperCase()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: "row",
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 15
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: "center",
        height: '15%'
    },
    mealHeader: {
        height: '85%',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealTitle: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingHorizontal: 12,
        paddingVertical: 5,
        textAlign: 'center'
    }
});

export default MealItem;