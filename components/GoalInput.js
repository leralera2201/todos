import React, {useState} from 'react'
import {Button, TextInput, View, StyleSheet, Modal} from "react-native";

const GoalInput = (props) => {
    const [text, setText] = useState('')

    const onChange = (enteredText) => {
        setText(enteredText)
    }

    const onAddGoal = () => {
        props.onAdd(text)
        setText('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.view}>
                <TextInput
                    placeholder="Course goal"
                    style={styles.input}
                    value={text}
                    onChangeText={onChange}
                />
                <View style={styles.viewButton}>
                    <View style={styles.button}>
                        <Button
                            title="Add"
                            onPress={onAddGoal}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            color='red'
                            onPress={props.onCancel}
                        />
                    </View>

                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    input: {width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, paddingVertical: 10, marginBottom: 10},
    view: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
})
export default GoalInput
