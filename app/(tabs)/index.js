import { FetchProducts } from '../../lib/fetchProducts';
import { Screen } from '../../components/Screen';

export default function Index() {
  return (
    <Screen className='items-center'>
      <FetchProducts />
    </Screen>
  );
}
