import { View, Text, StyleSheet } from 'react-native';

export default function Calendar() {
    return (
        <View style={styles.calendarContainer}>
            <Text style={styles.calendarTitle}>Активность за неделю</Text>
            <View style={styles.calendarRow}>
                <View style={[styles.calendarDay, { backgroundColor: '#007AFF' }]}>
                    <Text style={styles.calendarText}>Пн</Text>
                </View>
                <View style={[styles.calendarDay, { backgroundColor: '#007AFF' }]}>
                    <Text style={styles.calendarText}>Вт</Text>
                </View>
                <View style={[styles.calendarDay, { backgroundColor: '#ddd' }]}>
                    <Text style={styles.calendarText}>Ср</Text>
                </View>
                <View style={[styles.calendarDay, { backgroundColor: '#007AFF' }]}>
                    <Text style={styles.calendarText}>Чт</Text>
                </View>
                <View style={[styles.calendarDay, { backgroundColor: '#007AFF' }]}>
                    <Text style={styles.calendarText}>Пт</Text>
                </View>
                <View style={[styles.calendarDay, { backgroundColor: '#ddd' }]}>
                    <Text style={styles.calendarText}>Сб</Text>
                </View>
                <View style={[styles.calendarDay, { backgroundColor: '#007AFF' }]}>
                    <Text style={styles.calendarText}>Вс</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    calendarContainer: {
        marginBottom: 20,
    },
    calendarTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    calendarRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    calendarDay: {
        width: 40,
        height: 40,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarText: {
        color: '#fff',
        fontSize: 10,
    },
});
