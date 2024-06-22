import { WidgetItem } from '@/components'
import { products, type Product } from '@/data/products'
import { ItemCart } from '@/shopping-cart/components/ItemCart'
import { cookies } from 'next/headers'

export const metadata = {
  title: 'Cart Page',
  description: 'Cart Page'
}

interface ProductInCart {
  product: Product
  quantity: number
}

const getProductsInCart = (cart: { [id: string]: number }): ProductInCart[] => {
  const productsInCart: ProductInCart[] = []

  for (const id of Object.keys(cart)) {
    const product = products.find((product) => product.id === id)

    if (product) {
      productsInCart.push({
        product,
        quantity: cart[id]
      })
    }
  }
  return productsInCart
}

export default function CartPage() {
  const cookiesStore = cookies()
  const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as { [id: string]: number }

  const productsInCart = getProductsInCart(cart)

  const totalToPay = productsInCart.reduce(
    (prev, current) => current.product.price * current.quantity + prev,
    0
  )

  return (
    <div className='gris gris-cols-1 sm:grid-cols-2 gap-3'>
      <h1 className='text-4xl'>Products in Cart</h1>
      <hr className='mb-5 mt-3' />

      <div className='flex flex-col sm:flex-row gap-2 w-full'>
        <div className='flex flex-col gap-2 w-full sm:w-8/12'>
          {productsInCart.map(({ product, quantity }) => (
            <ItemCart key={product.id} product={product} quantity={quantity} />
          ))}
        </div>

        <div className='flex flex-col w-full sm:w-4/12'>
          <WidgetItem title='Total to pay'>
            <div className='flex flex-col'>
              <p className='text-3xl text-center text-gray-900'>
                ${(totalToPay * 1.21).toFixed(2)}
              </p>
              <p className='text-sm mt-2 text-center text-gray-900'>
                (Taxes 21%: {(totalToPay * 0.21).toFixed(2)})
              </p>
            </div>
          </WidgetItem>
        </div>
      </div>
    </div>
  )
}
