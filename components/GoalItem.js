import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const GoalItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => props.onDelete(props.item.id)}>
            <View style={styles.listItem}>
                <Text>{props.item.text}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#a9c4cc',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 5
    },
})
export default GoalItem
