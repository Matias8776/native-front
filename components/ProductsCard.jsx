import { Link } from 'expo-router';
import { useEffect, useRef } from 'react';
import { View, Text, Image, Pressable, Animated } from 'react-native';

export function ProductsCard({ product }) {
  const img = `http://192.168.1.40:8080/static/img/${product.thumbnails[0].slice(33)}`;

  return (
    <Link href={`/${product._id}`} asChild>
      <Pressable className='mb-10 active:opacity-50'>
        <View key={product._id} className='flex-row gap-5 mb-5 items-center'>
          <View>
            <Image source={{ uri: img }} className='h-36 w-56 rounded-lg' />
          </View>
          <View>
            <Text className='color-white font-bold text-xl'>
              {product.title}
            </Text>
            <Text className='color-white'>Precio: {product.price}</Text>
            <Text className='color-white'>
              Categoría: {product.category}
            </Text>
            <Text className='color-white'>Stock: {product.stock}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

export function AnimatedProductsCard({ product, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 100,
      useNativeDriver: true
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <ProductsCard product={product} />
    </Animated.View>
  );
}
