import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Platform, FlatList } from 'react-native'
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [grettings, setGrettings] = useState('');

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGrettings('Good Morning');
        } else if (currentHour >= 12 && currentHour < 18){
            setGrettings('Good Afternoon');
        } else {
            setGrettings('Good Night');
        }
    }, [])

    return (
        <View style={styles.container}>

            <Text
                style={styles.title}>Welcome, Manoel
            </Text>

            <Text style={styles.grettings}>
                {grettings}
            </Text>

            <TextInput
                style={styles.input}
                placeholder='New Skill'
                placeholderTextColor='#444'
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill} />

            <Text style={[styles.title, { marginVertical: 35 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <SkillCard skill={item} />
                )}
            />

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
    grettings: {
        color: 'white'
    },
})