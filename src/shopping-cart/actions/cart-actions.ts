'use client'

import { getCookie, hasCookie, setCookie } from 'cookies-next'

/*
cookie: cart = {
    'UUID-ABC-1': 5,
    'UUID-ABC-2': 3,
    'UUID-ABC-3': 2
}
*/

export const getCookieCart = (): { [id: string]: number } => {
  if (hasCookie('cart')) {
    const cokieCart = JSON.parse((getCookie('cart') as string) ?? '{}')
    return cokieCart
  }
  return {}
}

export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart()

  if (cookieCart[id]) {
    cookieCart[id] += 1
  } else {
    cookieCart[id] = 1
  }

  setCookie('cart', JSON.stringify(cookieCart))
}

export const removeProductFromCart = (id: string) => {
  const cookieCart = getCookieCart()

  if (cookieCart[id]) {
    delete cookieCart[id]
  }

  setCookie('cart', JSON.stringify(cookieCart))
}

export const removeSingleProductFromCart = (id: string) => {
  const cookieCart = getCookieCart()

  if (cookieCart[id]) {
    if (cookieCart[id] === 1) {
      delete cookieCart[id]
    } else {
      cookieCart[id] -= 1
    }
  }

  setCookie('cart', JSON.stringify(cookieCart))
}
