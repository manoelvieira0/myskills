import React from "react"
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from "react-native"

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest } : ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.7}
            {...rest}
        >
            <Text
                style={styles.buttonText}>{title}
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