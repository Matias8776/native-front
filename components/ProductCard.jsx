import { View, Text, Image } from 'react-native';

export function ProductCard({ product }) {
  const img = `http://192.168.1.40:8080/static/img/${product.thumbnails[0].slice(33)}`;

  return (
    <View key={product._id} className='flex gap-5 mb-5 items-center'>
      <View>
        <Image source={{ uri: img }} className='h-64 w-96 rounded-lg' />
      </View>
      <View className="items-center">
        <Text className='color-white font-bold text-2xl'>{product.title}</Text>
        <Text className='color-white text-lg'>Precio: {product.price}</Text>
        <Text className='color-white text-lg'>
          Categoría: {product.category}
        </Text>
        <Text className='color-white text-lg'>Stock: {product.stock}</Text>
        <Text className='color-white text-lg'>
          Descripción: {product.description}
        </Text>
      </View>
    </View>
  );
}