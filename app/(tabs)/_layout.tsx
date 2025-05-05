import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name='achievements'
                options={{
                    title: 'Achievements',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'trophy' : 'trophy-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name='activities'
                options={{
                    title: 'Activities',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'calendar' : 'calendar-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}
