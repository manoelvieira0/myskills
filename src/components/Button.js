import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

export function Button({onPress}) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.7}
            onPress={onPress}
        >
            <Text
                style={styles.buttonText}>Add
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        padding: Platform.OS === 'ios' ? 15 : 12,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
})