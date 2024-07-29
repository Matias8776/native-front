import { Tabs } from 'expo-router';
import { AboutIcon, HomeIcon } from '../../components/Icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: 'black' },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray'
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />
        }}
      />
      <Tabs.Screen
        name='about'
        options={{
          title: 'Info',
          tabBarIcon: ({ color }) => <AboutIcon color={color} />
        }}
      />
    </Tabs>
  );
}
