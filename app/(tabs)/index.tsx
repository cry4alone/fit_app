import Calendar from '@/components/Calendar';
import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AccountInfo } from '@/components/AccountInfo';
import ProgressBar from '@/components/ProgressBar';
import { Stats } from '@/components/Stats';
import { useUserProgress } from '@/hooks/useUserProgress';
export default function HomeScreen() {
    const { addXp, xp, level, achievements } = useUserProgress();
    const xpToNextLevel = 1000;

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <View style={styles.container}>
                <AccountInfo level={level}></AccountInfo>

                <View style={styles.recommendationCard}>
                    <Text style={styles.recommendationText}>Совет дня: Добавь в рацион больше зелени и воды!</Text>
                </View>

                <Stats></Stats>

                <View style={styles.progressCard}>
                    <Text style={styles.cardTitle}>Опыт</Text>
                    <Text style={styles.xpText}>{xp}</Text>
                    <ProgressBar progress={xp / xpToNextLevel} />
                    <TouchableOpacity style={styles.addAction} onPress={() => addXp(100)}>
                        <Text style={styles.addActionText}>+ Добавить активность</Text>
                    </TouchableOpacity>
                </View>

                <Calendar></Calendar>

                <View style={styles.achievementsContainer}>
                    <Text style={styles.sectionTitle}>Твои достижения</Text>
                    {achievements.map((achievement, index) => (
                        <View key={index} style={styles.achievementItem}>
                            <Text>🏆 {achievement}</Text>
                        </View>
                    ))}
                </View>

                <Link href='/achievements' asChild>
                    <TouchableOpacity style={styles.navButton}>
                        <Text style={styles.navButtonText}>Все достижения</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    scrollContent: {
        paddingBottom: 40,
    },
    motivationCard: {
        backgroundColor: '#e8f5e9',
        padding: 16,
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#c8e6c9',
    },
    motivationText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#2e7d32',
    },
    progressCard: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    xpText: {
        marginBottom: 8,
        fontSize: 16,
    },
    addAction: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    addActionText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    achievementsContainer: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    achievementItem: {
        backgroundColor: '#fff',
        padding: 12,
        marginBottom: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#eee',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 1,
    },
    navButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    navButtonText: {
        color: 'white',
        fontSize: 16,
    },
    recommendationCard: {
        backgroundColor: '#fff3cd',
        padding: 12,
        borderRadius: 8,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ffe69c',
    },
    recommendationText: {
        fontSize: 14,
        color: '#856404',
    },
});
