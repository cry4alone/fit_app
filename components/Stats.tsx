import { View, Text, StyleSheet } from 'react-native';

export function Stats() {
    return (
        <View style={styles.statsContainer}>
            <View style={styles.statItem}>
                <Text style={styles.statNumber}>3000</Text>
                <Text style={styles.statLabel}>шагов</Text>
            </View>
            <View style={styles.statItem}>
                <Text style={styles.statNumber}>250</Text>
                <Text style={styles.statLabel}>ккал</Text>
            </View>
            <View style={styles.statItem}>
                <Text style={styles.statNumber}>30</Text>
                <Text style={styles.statLabel}>мин</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 1,
    },
    statNumber: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 12,
        color: '#666',
    },
});
