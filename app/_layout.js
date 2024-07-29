import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import '../global.css';

export default function Layout() {
  return (
    <View className='flex-1'>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text className='color-white text-3xl font-bold tracking-wide'>
              Ecommerce App
            </Text>
          ),
          statusBarColor: 'black'
        }}
      />
    </View>
  );
}
