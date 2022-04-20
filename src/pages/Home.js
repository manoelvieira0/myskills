import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native'

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    return (
        <View style={styles.container}>

            <Text
                style={styles.title}>Welcome, Manoel
            </Text>

            <TextInput
                style={styles.input}
                placeholder='New Skill'
                placeholderTextColor='#444'
                onChangeText={setNewSkill}
            />

            <TouchableOpacity
                style={styles.button}
                activeOpacity={.7}
                onPress={handleAddNewSkill}
            >
                <Text
                    style={styles.buttonText}>Add
                </Text>
            </TouchableOpacity>

            <Text style={[styles.title, { marginVertical: 35 }]}>
                My Skills
            </Text>

            {
                mySkills.map(skill => (
                    <TouchableOpacity key={skill} style={styles.buttonSkill}>
                        <Text style={styles.textSkill}>
                            {skill}
                        </Text>
                    </TouchableOpacity>
                ))
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: 'white',
        fontSize: 16,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 25,
        borderRadius: 8
    },
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