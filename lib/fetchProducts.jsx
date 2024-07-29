import { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { AnimatedProductsCard } from '../components/ProductsCard';

export function FetchProducts() {
  const [products, setProducts] = useState({ payload: { docs: [] } });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://192.168.1.40:8080/api/products');
        if (!response.ok) {
          throw new Error('Error al recuperar los productos');
        }
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error('Error al recuperar los productos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <View>
      {products.payload.docs.length === 0 ? (
        <ActivityIndicator color={'#fff'} />
      ) : (
        <FlatList
          data={products.payload.docs}
          keyExtractor={(product) => product._id}
          renderItem={({ item, index }) => (
            <AnimatedProductsCard product={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
