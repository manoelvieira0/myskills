import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

export function SkillCard({skill}) {
    return (
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 40,
        alignItems: 'center',
        marginVertical: 10
    },
    textSkill: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
})
