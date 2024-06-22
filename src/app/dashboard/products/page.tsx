import { products } from '@/data/products'
import { ProductCard } from '@/products/components/ProductCard'

export const metadata = {
  title: 'Products Page',
  description: 'Products Page'
}

export default function ProductsPage() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3'>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
