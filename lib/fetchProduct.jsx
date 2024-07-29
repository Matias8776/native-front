import { useEffect, useState } from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import { ProductCard } from '../components/ProductCard';

export function FetchProduct({ id }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://192.168.1.40:8080/api/products/${id}`
        );
        if (!response.ok) {
          throw new Error('Error al recuperar el producto');
        }
        const product = await response.json();
        setProduct(product);
      } catch (error) {
        console.error('Error al recuperar el producto:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <View>
      {!product || !product.payload ? (
        <ActivityIndicator color={'#fff'} />
      ) : (
        <ScrollView>
          <ProductCard product={product.payload} />
        </ScrollView>
      )}
    </View>
  );
}
