import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

export const AccountInfo = () => {

    const userLevel = 3;
    const userName = 'Andrey';

    return (
        <View style={styles.header}>
            <View style={styles.headerTop}>
                <Image
                    source={{
                        uri: 'https://gravatar.com/avatar/7249dc107ffa9d9adc552e4a24ccc253?s=400&d=retro&r=x',
                    }}
                    style={styles.avatar}
                    contentFit='cover'
                />
                <View style={styles.headerText}>
                    <Text style={styles.titleText}>Добро пожаловать, {userName}!</Text>
                    <Text style={styles.subtitle}>Твой уровень: {userLevel}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        marginBottom: 20,
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 5,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#ddd',
    },
    headerText: {
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
});
