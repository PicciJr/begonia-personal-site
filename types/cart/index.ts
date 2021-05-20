import { IProduct } from 'types/product/index'

/**
 * items: items del carrito
 * subtotal: subtotal actual del carrito
 */
export interface ICart {
    items: IProduct[]
    subtotal: number
}
