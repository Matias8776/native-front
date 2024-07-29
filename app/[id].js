import { Text } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Screen } from '../components/Screen';
import { FetchProduct } from '../lib/fetchProduct';

export default function ProductDetail() {
  const { id } = useLocalSearchParams();

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft: () => {},
          headerRight: () => {}
        }}
      />
      <Text className='text-white font-bold mb-10 text-3xl text-center'>
        Detalle del producto
      </Text>
      <FetchProduct id={id} />
    </Screen>
  );
}
