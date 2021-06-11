import { IProduct } from 'types/product/index'
import { IAddress } from 'types/address/index'

/**
 * items: items del carrito
 * subtotal: subtotal actual del carrito
 * shippingAddress: dirección de envío del pedido
 * email: email del comprador
 */
export interface ICart {
    items: IProduct[]
    subtotal: number
    shippingAddress?: IAddress
    email?: string
}
